import React from "react";
import styles from "../../../style";
import { Table } from "antd";
import { useSelector } from "react-redux";

const RentDetailsTab = () => {
  const properties = useSelector((state) => state.propertiesSlice.admin);
  const allProperties = [...properties.available, ...properties.funded];

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

  // !Expandable Table Data
  const expandedRowRender = () => {
    const columns = [
      {
        title: "Username",
        dataIndex: "username",
        key: "username",
      },
      {
        title: "Investment Date",
        dataIndex: "date",
        key: "date",
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
        username: "peter",
        investment: "85222",
        earning: "95459",
        date: "2014-12-24",
      },
      {
        key: 89,
        username: "Larem",
        investment: "85222",
        earning: "95459",
        date: "2014-12-24",
      },
      {
        key: 74,
        username: "Shakib",
        investment: "85222",
        earning: "95459",
        date: "2014-12-24",
      },
    ];
    return (
      <Table
        title={() => (
          <h2 className={`${styles.boldText} text-lightGreen `}>
            Investors Information
          </h2>
        )}
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
        Rent Details
      </h1>
      <h1 className="text-sm text-gray-500 mt-3 text-center md:text-left mb-8">
        View All Rent Details of the properties
      </h1>
      {/* <Link to="/adminPanel/addProperty" className='inline-block mb-8 '>
                <CustomButton text="Add new Property" />
            </Link> */}

      {/* <Table pagination={{ pageSize: 7 }} columns={columns} dataSource={data} /> */}
      <Table pagination={{ pageSize: 7 }} columns={columns} dataSource={data} />
    </div>
  );
};

export default RentDetailsTab;
