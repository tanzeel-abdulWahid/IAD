import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../style";
import BalanceCard from "../../components/BalanceCard";
import { CreditCardOutlined, StarOutlined } from "@ant-design/icons";
import CustomButton from "../../components/CustomButton";
import { Divider, Table } from "antd";
import { callFinances } from "../../store/authActions";
import DepositModal from "../../components/DepositModal";
import InputField from "../../components/InputField";
import { uploadFile } from "./imageUpload";
import axios from "axios";
import { backend_url } from "../../api";
import { authActions } from "../../store/authSlice";

const WalletTab = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.authSlice);
  const [open, setopen] = useState(false);
  const [image, setImage] = useState(null);
  const [previmage, setprevimage] = useState(null);
  const [wait, setwait] = useState(false);
  const [call, setcall] = useState(false);

  const [transactionObj, settransactionObj] = useState({
    profile: auth.profile._id,
    reqDate: new Date(),
    transactionId: "",
    imageLink: "",
    amount: 0,
    approved: false,
  });
  useEffect(() => {
    dispatch(callFinances(auth.profile._id));
  }, [call]);
  const { moneyAddRequest } = auth.finances ? auth.finances : [];

  const data = moneyAddRequest?.map((m) => {
    const { reqDate, transactionId, imageLink, amount, approved } = m;
    return {
      reqDate: new Date(reqDate).toDateString(),
      tId: transactionId,
      status: approved ? "Approved" : "Pending",
      amount: amount.toLocaleString(),
      receipt: imageLink,
    };
  });

  const columns = [
    {
      title: "Request Date",
      dataIndex: "reqDate",
      key: "reqDate",
    },
    {
      title: "TID",
      dataIndex: "tId",
      key: "tId",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Receipt",
      dataIndex: "receipt",
      key: "receipt",
      responsive: ["md"],
      render: (_, record) => (
        <a
          href={record.receipt}
          target="_blank"
          className="bg-green-600 p-2 px-4 rounded-lg transition-transform text-white active:scale-[0.9] font-bold disabled:bg-green-200 disabled:active:scale-100"
        >
          Receipt
        </a>
      ),
    },
  ];

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
    if (file) {
      if (previmage) {
        setprevimage(null);
      }
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setprevimage(reader.result);
      };
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setwait(true);
    try {
      const imageUrl = await uploadFile(image);
      const res = await axios.post(`${backend_url}client/addmoneyrequest`, {
        ...transactionObj,
        imageLink: imageUrl,
      });
      const { updatedFinances, profile } = res.data;
      console.log(res.data);
      setcall(!call);
      settransactionObj({
        ...transactionObj,
        imageLink: "",
        amount: "",
        transactionId: "",
      });
      setprevimage(null);
      setwait(false);
      // dispatch(authActions.setFinances({ profile, finances: updatedFinances }));
    } catch (e) {
      console.log(e);
      setwait(false);
    }
  };
  const { totalAmount, amountAdded, amountWithdrawn, rentalIncome, _id } =
    auth.profile.wallet;
  return (
    <>
      <h1 className={`${styles.boldText} text-lightGreen text-center text-3xl`}>
        Wallet
      </h1>
      <Divider className="border-lightGray" />
      <div className="flex flex-col gap-y-3 md:flex-row justify-between mt-12">
        <BalanceCard
          heading="Cash balance"
          amount={`$ ${rentalIncome.toLocaleString()}`}
          btns={true}
          setopen={setopen}
        />
        <BalanceCard
          heading="Total Balance"
          amount={`$ ${totalAmount.toLocaleString()}`}
          icon={<StarOutlined className="iconStyleLg" />}
        />
      </div>

      <h1
        className={`${styles.boldText} mt-12 text-lightGreen text-center text-3xl`}
      >
        Transactions
      </h1>
      <Divider className="border-lightGray" />
      <div className="mt-12">
        <Table columns={columns} dataSource={data} />;
      </div>

      <h1
        className={`${styles.boldText}  text-lightGreen text-center text-3xl`}
      >
        Banks
      </h1>
      <Divider className="border-lightGray" />

      <div className="bg-white md:w-[48%] mt-12 rounded-lg">
        <div className="flex items-center gap-x-5 pl-5 pt-5">
          <CreditCardOutlined className="text-3xl" />
          <h1>Add a bank account to deposit from any where in the world</h1>
        </div>

        <div className="p-5 ">
          <CustomButton type="button" text="Add new bank" />
        </div>
      </div>
      {open && (
        <DepositModal open={open} setopen={setopen}>
          <div className="">
            <h1 className="text-xl text-gray-600">Transaction Details</h1>

            <div className="w-full h-[10rem] my-8">
              {previmage ? (
                <img
                  className="w-full h-full object-contain"
                  src={previmage}
                  alt="Preview"
                />
              ) : (
                <div className="text-center text-gray-400">
                  transaction screenshot...
                </div>
              )}
            </div>
            <div className="flex gap-2">
              <InputField
                placeholder={"Transaction Id"}
                type={"text"}
                value={transactionObj.transactionId}
                setvalue={(x) => {
                  settransactionObj({ ...transactionObj, transactionId: x });
                }}
              />
              <InputField
                placeholder={"Amount"}
                type={"number"}
                setvalue={(x) => {
                  settransactionObj({ ...transactionObj, amount: x });
                }}
                value={transactionObj.amount}
              />
              <label
                htmlFor="image-upload"
                className="w-[25%] flex items-center justify-center rounded-md ring-light-gray-theme transition-transform active:scale-[0.97]"
              >
                <input
                  type="file"
                  accept="image/*"
                  id="image-upload"
                  onChange={handleImageChange}
                  style={{ display: "none" }}
                />
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="rgb(107 114 128)"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
                    />
                  </svg>
                </div>
              </label>
            </div>
            <CustomButton
              text={!wait ? "Submit" : "Please Wait"}
              onClick={handleSubmit}
            />
          </div>
        </DepositModal>
      )}
    </>
  );
};

export default WalletTab;
