import React, { useEffect } from "react";
import styles from "../../../style";
import { Space, Table, Tag } from "antd";
import CustomButton from "../../../components/CustomButton";
import { Link } from "react-router-dom";
import "../../../components/Sidebar.css";
import { useDispatch, useSelector } from "react-redux";
import { propertiesActions } from "../../../store/propertiesSlice";
import { getAdminProperties } from "../../../store/propertiesActions";

const AllPropertiesTab = () => {
  const properties = useSelector((state) => state.propertiesSlice.admin);
  const allProperties = [...properties.available, ...properties.funded];
  const auth = useSelector((state) => state.authSlice.profile.role);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAdminProperties(auth));
  }, []);

  const columns = [
    {
      title: "Property Name",
      dataIndex: "propName",
      key: "propName",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      responsive: ["md"],
    },
    {
      title: "Investors",
      dataIndex: "investors",
      key: "investors",
      responsive: ["md"],
    },
    {
      title: "Invested Amount",
      dataIndex: "invested",
      key: "invested",
      responsive: ["md"],
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      responsive: ["md"],
    },
    {
      title: "Rent",
      dataIndex: "rent",
      key: "rent",
      responsive: ["md"],
    },
    // {
    //   title: "Status",
    //   dataIndex: "status",
    //   key: "status",
    //   responsive: ["md"],
    //   filters: [
    //     {
    //       text: "Available",
    //       value: "Available",
    //     },
    //     {
    //       text: "Funded",
    //       value: "Funded",
    //     },
    //   ],
    //   onFilter: (value, record) => record.status.indexOf(value) === 0,
    //   render: (text) => {
    //     return (
    //       <span
    //         className={`${
    //           text === "Available" ? "bg-green-300" : "bg-red-300"
    //         } p-1 rounded-md`}
    //       >
    //         {text}
    //       </span>
    //     );
    //   },
    // },
  ];
  const data = allProperties.map((p) => {
    const {
      property: { propertyName },
      property: { totalValue },
      property: {
        financialDetails: { rent },
      },
      isAvailable,
      investedAmount,
      numInvestors,
    } = p;
    return {
      propName: propertyName,
      price: `$ ${totalValue.toLocaleString()}`,
      investors: numInvestors,
      invested: investedAmount,
      status: isAvailable ? "Available" : "Funded",
      rent: `$ ${rent.toLocaleString()}`,
    };
  });
  return (
    <div>
      <h1
        className={`${styles.boldText} text-center md:text-left text-lightGreen text-3xl md:pl-10 lg:pl-0`}
      >
        Properties
      </h1>
      <h1 className="text-sm text-gray-500 mt-3 text-center md:text-left">
        View, Edit and Update All properties details
      </h1>
      <Link to="/adminPanel/addProperty" className="inline-block mb-8 ">
        <CustomButton text="Add new Property" />
      </Link>

      <Table pagination={{ pageSize: 7 }} columns={columns} dataSource={data} />
    </div>
  );
};

export default AllPropertiesTab;
