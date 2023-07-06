import React, { useState } from "react";
import styles from "../../style";
import { Progress } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { clientInvest } from "../../store/propertiesActions";
import InputField from "../InputField";

const PriceCard = ({ details }) => {
  const dispatch = useDispatch();
  const currentuser = useSelector((state) => state.authSlice.profile.authUser);
  const {
    financialDetails,
    isAvailable,
    investedAmount,
    numInvestors,
    totalValue,
    propertyId,
  } = details;
  const { annualReturn, rent, stakeFee, transactionCost, valueAppr } =
    financialDetails;

  const [amount, setAmount] = useState(0);
  const [investmentModal, setInvestmentModal] = useState(false);
  const investingDate = new Date().toDateString();

  console.log(currentuser, "currentuser");

  const handleInvest = () => {
    console.log("Investing");
    dispatch(clientInvest(currentuser, propertyId, amount, investingDate));
    setAmount(0);
  };

  return (
    <>
      <h1 className={`${styles.boldText} md:text-xl text-center`}>
        Property Price
      </h1>
      <h1
        className={`${styles.boldText} text-lightGreen font-bold md:text-3xl pb-5 text-center mt-2`}
      >
        $ {totalValue.toLocaleString()}
      </h1>
      <Progress showInfo={false} percent={100} strokeColor="#4673B8" />
      <h1 className={`${styles.boldText} text-sm pb-5 `}>
        {((investedAmount / totalValue) * 100).toFixed(2)}% funded
      </h1>
      <div className="flex justify-between">
        <h1 className={`${styles.boldText} text-sm`}>
          {" "}
          {numInvestors} Investors{" "}
        </h1>
        {investedAmount === totalValue && (
          <h1 className="text-red-500 flex items-center gap-x-2">
            {" "}
            {<CloseCircleOutlined />} Closed on 12 Jan 2023
          </h1>
        )}
      </div>
      <div className="bg-creamWhite p-3 rounded-lg mt-4">
        <h1 className="font-bold">Propery Cost</h1>

        <div className="flex justify-between py-2">
          <h1 className="font-thin">Property Price</h1>
          <h1 className="font-semibold">$ {totalValue}</h1>
        </div>
        <div className="flex justify-between py-2">
          <h1 className="font-thin">Transaction Cost</h1>
          <h1 className="font-semibold">{transactionCost}%</h1>
        </div>
        <div className="flex justify-between py-2">
          <h1 className="font-thin">Stake fees</h1>
          <h1 className="font-semibold">$ {stakeFee}</h1>
        </div>

        {/* <div className="flex justify-between py-2">
          <h1 className="font-thin text-sm md:text-lg">Property Price</h1>
          <h1 className="font-semibold text-sm md:text-lg">
            $ {price.toLocaleString()}
          </h1>
        </div>
        <div className="flex justify-between py-2">
          <h1 className="font-thin text-sm md:text-lg">Transaction Cost</h1>
          <h1 className="font-semibold text-sm md:text-lg">
            {transactionCost} %
          </h1>
        </div>
        <div className="flex justify-between py-2">
          <h1 className="font-thin text-sm md:text-lg">Stake Fee</h1>
          <h1 className="font-semibold text-sm md:text-lg">$ {stakeFee}</h1>
        </div> */}
      </div>
      <button
        onClick={() => {
          setInvestmentModal(true);
        }}
        className="w-full bg-lightGreen py-2 rounded-md text-lg text-white font-bold transition-all hover:shadow-[#4674b895] hover:shadow-lg active:scale-95"
      >
        INVEST
      </button>
      {investmentModal && isAvailable && (
        <div className=" w-full mt-5">
          Investment Amount here
          <InputField
            value={amount}
            setvalue={setAmount}
            type={"tel"}
            placeholder="Greater than $500"
          />
          <button
            disabled={amount < 500}
            className="bg-lightGreen w-full mt-3 py-3 text-white capitalize rounded-full transition-all hover:shadow-[#4674b895] hover:shadow-lg active:scale-95 disabled:bg-[#4674b862] disabled:hover:shadow-none"
            onClick={handleInvest}
          >
            Continue
          </button>
        </div>
      )}
    </>
  );
};

export default PriceCard;
