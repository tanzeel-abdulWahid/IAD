import React, { useEffect, useState } from "react";
import styles from "../../../style";
import { Space, Table, Tag } from "antd";
import CustomButton from "../../../components/CustomButton";
import { Link } from "react-router-dom";
import "../../../components/Sidebar.css";
import { useDispatch, useSelector } from "react-redux";
import {
  approveMoneyRequests,
  fetchMoneyRequests,
} from "../../../store/Admin/financesActionsAdmin";

const columns = [
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    responsive: ["md"],
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    responsive: ["md"],
  },
  {
    title: "Amount Requested",
    dataIndex: "amount",
    key: "amount",
  },
  {
    title: "Phone No.",
    dataIndex: "phNo",
    key: "pnNo",
  },

  {
    title: "Wallet",
    dataIndex: "wallet",
    key: "wallet",
    responsive: ["md"],
  },
];

const PurchaseRequestsTab = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMoneyRequests());
    // console.log("working");
  }, []);
  const finances = useSelector(
    (state) => state.financesSliceAdmin.moneyRequests
  );

  const data = finances
    ? finances.map((f, ind) => {
        let totalAmount = 0;
        f.moneyAddRequest.forEach((x) => {
          totalAmount += x.amount;
        });
        return {
          key: ind,
          email: f.email,
          name: f.profile.name,
          amount: totalAmount.toLocaleString(),
          phNo: f.profile.phoneNumber,
          wallet: f.profile.wallet.totalAmount.toLocaleString(),
          moneyRequest: f.moneyAddRequest,
          profile: f.profile,
        };
      })
    : [];

  const expandedRowRender = () => {
    const columns = [
      {
        title: "Property Name",
        dataIndex: "propertyName",
        key: "propertyName",
      },
      {
        title: "Investment",
        dataIndex: "investment",
        key: "investment",
      },
      {
        title: "Earning",
        dataIndex: "earning",
        key: "earning",
      },
    ];
    const data = [
      {
        key: 78,
        propertyName: "Dubai Al Khaeleej Tower",
        investment: "85222",
        earning: "95459",
      },
      {
        key: 89,
        propertyName: "Dubai Al Khaeleej Tower",
        investment: "85222",
        earning: "95459",
      },
      {
        key: 74,
        propertyName: "Dubai Al Khaeleej Tower",
        investment: "85222",
        earning: "95459",
      },
    ];
    return (
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        className="mb-3"
      />
    );
  };
  return (
    <div>
      <h1
        className={`${styles.boldText} text-center md:text-left text-lightGreen text-3xl md:pl-10 lg:pl-0`}
      >
        Purchase Requests
      </h1>
      <h1 className="text-sm text-gray-500 mt-3 text-center md:text-left mb-8">
        View All pruchase requests here{" "}
      </h1>
      {/* <Link to="/adminPanel/addProperty" className='inline-block mb-8 '>
                <CustomButton text="Add new Property" />
            </Link> */}

      <Table
        pagination={{ pageSize: 7 }}
        columns={columns}
        expandable={{
          expandedRowRender: (record) => {
            const columns = [
              {
                title: "Transaction ID",
                dataIndex: "tId",
                key: "tId",
              },
              {
                title: "Request Date",
                dataIndex: "reqDate",
                key: "reqDate",
              },
              {
                title: "Amount",
                dataIndex: "amount",
                key: "amount",
              },
              {
                title: "Receipt",
                key: "receipt",
                responsive: ["md"],
                render: (_, record) => (
                  <a
                    href={record.receipt}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Receipt
                  </a>
                ),
              },
              {
                title: "Accept",
                key: "accept",
                responsive: ["md"],
                render: (_, record) => (
                  <button
                    text={"Accept"}
                    className="bg-green-600 p-2 px-4 rounded-lg transition-transform text-white active:scale-[0.9] font-bold"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(approveMoneyRequests(record.tId, record.accept));
                      //   setacceptBtn(!acceptBtn);
                      console.log(record.accept, record.tId);
                    }}
                  >
                    Accept
                  </button>
                ),
              },
            ];
            const data = record.moneyRequest.map((f, ind) => {
              return {
                key: ind,
                tId: f.transactionId,
                reqDate: new Date(f.reqDate).toDateString(),
                amount: f.amount.toLocaleString(),
                receipt: f.imageLink,
                accept: record.profile._id,
              };
            });

            return (
              <Table
                columns={columns}
                dataSource={data}
                pagination={false}
                // className="mb-3"
              />
            );
          },
          defaultExpandedRowKeys: ["0"],
        }}
        dataSource={data}
      />
    </div>
  );
};

export default PurchaseRequestsTab;
