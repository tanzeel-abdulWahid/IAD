import React, { useEffect } from "react";
import styles from "../../../style";
import { DownOutlined } from "@ant-design/icons";
import { Badge, Dropdown, Space, Table } from "antd";
import CustomButton from "../../../components/CustomButton";
import { Link } from "react-router-dom";
import "../../../components/Sidebar.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfiles } from "../../../store/Admin/profilesActionAdmin";

//! Rows For main table

const UsersListTab = () => {
  const dispatch = useDispatch();
  const profiles = useSelector((state) => state.profilesSliceAdmin.profiles);
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      responsive: ["md"],
    },
    {
      title: "Phone No",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "No. Of Properties",
      dataIndex: "noProps",
      key: "noProps",
    },
    {
      title: "Total Investment",
      dataIndex: "totalInv",
      key: "totalInv",
    },
    {
      title: "Total Earnings",
      dataIndex: "totalEarn",
      key: "totalEarn",
      responsive: ["md"],
    },
  ];
  //! Columns For main table

  useEffect(() => {
    dispatch(fetchProfiles());
  }, []);

  const data = profiles
    ? profiles.map((p, ind) => ({
        key: ind,
        name: p.name,
        phone: p.phoneNumber,
        noProps: p.portfolio.length,
        totalInv: p.totalInvestment.toLocaleString(),
        totalEarn: p.totalEarning.toLocaleString(),
        portfolio: p.portfolio,
      }))
    : [];
  // console.log(profiles);

  // !Expandable Table Data
  const expandedRowRender = (record) => {
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
        All Users
      </h1>
      <h1 className="text-sm text-gray-500 mt-3 text-center md:text-left mb-8">
        View All Users details on your platform{" "}
      </h1>
      {/* <Link to="/adminPanel/addProperty" className='inline-block mb-8 '>
                <CustomButton text="Add new Property" />
            </Link> */}

      {/* <Table pagination={{ pageSize: 7 }} columns={columns} dataSource={data} /> */}
      {!profiles ? (
        <h1>The Profiles can't be loaded</h1>
      ) : (
        <Table
          pagination={{ pageSize: 7 }}
          columns={columns}
          expandable={{
            expandedRowRender: (record) => {
              const columns = [
                {
                  title: "Property Name",
                  dataIndex: "propName",
                  key: "propName",
                },
                {
                  title: "Invested Amount",
                  dataIndex: "invAmt",
                  key: "invAmt",
                },
                {
                  title: "Rent Per Month",
                  dataIndex: "rentMonth",
                  key: "rentMonth",
                },
                {
                  title: "Rent Earned",
                  dataIndex: "rentEarned",
                  key: "rentEarned",
                },
                {
                  title: "Next Rent",
                  dataIndex: "nextRent",
                  key: "nextRent",
                },

                {
                  title: "Pay",
                  key: "pay",
                  responsive: ["md"],
                  render: (_, record) => (
                    <button
                      text={"Accept"}
                      disabled={new Date() <= record.dateRent}
                      className="bg-green-600 p-2 px-4 rounded-lg transition-transform text-white active:scale-[0.9] font-bold disabled:bg-green-200 disabled:active:scale-100"
                      onClick={(e) => {
                        e.preventDefault();

                        console.log(record.dateRent);
                      }}
                    >
                      Pay Rent
                    </button>
                  ),
                },
              ];
              const data = record.portfolio.map((f, ind) => {
                const rentDate = new Date(f.nextRentDate);
                console.log(rentDate);
                return {
                  key: ind,
                  propName: f.property.propertyName,
                  invAmt: f.investedAmount.toLocaleString(),
                  rentMonth: f.rentPerMonth.toFixed(2),
                  rentEarned: f.rentEarned,
                  nextRent: rentDate.toDateString(),
                  dateRent: rentDate,
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
          }}
          dataSource={data}
        />
      )}
    </div>
  );
};

export default UsersListTab;
