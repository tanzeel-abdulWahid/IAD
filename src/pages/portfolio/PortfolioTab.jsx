import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "../../components/CustomButton";
import styles from "../../style";
import BalanceCard from "../../components/BalanceCard";
import {
  RiseOutlined,
  HomeOutlined,
  CalendarOutlined,
  BarChartOutlined,
} from "@ant-design/icons";
import InsightsCard from "../../components/InsightsCard";
import { Divider, Table } from "antd";
import { useSelector } from "react-redux";

const PortfolioTab = () => {
  const portfolio = useSelector((state) => state.authSlice.profile.portfolio);

  const { available, funded } = useSelector(
    (state) => state.propertiesSlice.client
  );
  const propertiesAll = [...available, ...funded];

  let portfolioValue = 0;
  let monthlyIncome = 0;
  let totalIncome = 0;
  let noOfProps = portfolio.length;
  let annualRental = 0;

  portfolio.forEach((p) => {
    portfolioValue += p.investedAmount;
    monthlyIncome += p.rentPerMonth;
    totalIncome += p.rentEarned;
    annualRental += p.rentEarned * 12;
  });

  const columns = [
    {
      title: "Property",
      dataIndex: "property",
      key: "property",
    },
    {
      title: "Investment",
      dataIndex: "investment",
      key: "investment",
    },
    {
      title: "Rent Earned",
      dataIndex: "rent",
      key: "rent",
    },
    {
      title: "Next Rent Date",
      dataIndex: "nextRent",
      key: "nextRent",
    },
    {
      title: "Rent Per Month",
      dataIndex: "rentMonth",
      key: "rentMonth",
    },
  ];

  console.log(propertiesAll);

  const data = portfolio.map((p) => {
    const { property, investedAmount, rentEarned, nextRentDate, rentPerMonth } =
      p;
    const propertyName = propertiesAll.find((p) => p.property._id === property)
      .property.propertyName;
    return {
      property: propertyName,
      investment: `$ ${investedAmount.toLocaleString()}`,
      rent: `$ ${rentEarned.toLocaleString()}`,
      nextRent: new Date(nextRentDate).toDateString(),
      rentMonth: `$ ${rentPerMonth.toFixed(2).toLocaleString()}`,
    };
  });
  return (
    <div className="">
      <h1 className={`${styles.boldText} text-lightGreen text-center text-3xl`}>
        Portfolio
      </h1>
      <Divider className="border-lightGray" />

      {/* portfolio component */}
      <div className="bg-white p-7 mt-12 md:min-h-[30rem] flex flex-col items-center justify-around">
        <div className="w-fit text-center">
          <h1 className="font-normal md:text-lg mb-2 ">Portfolio Value</h1>
          <h1 className={`${styles.boldText} text-7xl`}>
            ${portfolioValue.toLocaleString()}
          </h1>
        </div>
        <div className={`${styles.flexCenter} flex-col`}>
          <h1 className="font-normal md:text-lg text-center">
            Invest in properties <br /> to start building your wealth
          </h1>
          <Link to={"/homePage"}>
            <CustomButton text="Buy Properties" />
          </Link>
        </div>
      </div>

      {/* KEY Financials divs */}

      <h1
        className={`${styles.boldText} text-lightGreen text-center text-3xl mt-12`}
      >
        Key Financials
      </h1>
      <Divider className="border-lightGray" />

      <div className="flex flex-col gap-y-3 md:flex-row justify-between mt-12">
        <BalanceCard
          heading="Monthly Rent"
          amount={`$ ${monthlyIncome.toFixed(2)}`}
          icon={<RiseOutlined className="iconStyleLg" />}
        />
        <BalanceCard
          heading="Total Earned"
          amount={`$ ${totalIncome}`}
          icon={<RiseOutlined className="iconStyleLg" />}
        />
      </div>

      {/* Quick Insights */}

      <h1
        className={`${styles.boldText} text-lightGreen text-center text-3xl mt-12`}
      >
        Quick insights
      </h1>
      <Divider className="border-lightGray" />

      <div className="flex flex-col gap-y-3 md:flex-row justify-between mt-12">
        <InsightsCard
          heading="Number of Properties"
          amount={`${noOfProps}`}
          icon={<HomeOutlined className="iconStyle" />}
        />
        <InsightsCard
          heading="Portfolio Occupancy"
          amount="100%"
          icon={<CalendarOutlined className="iconStyle" />}
        />
        <InsightsCard
          heading="Annaulised Rental Yield"
          amount={`$ ${annualRental / noOfProps}`}
          icon={<BarChartOutlined className="iconStyle" />}
        />
      </div>

      {/* Investments table  */}

      <h1
        className={`${styles.boldText} mt-12 text-lightGreen text-center text-3xl`}
      >
        Active Investments
      </h1>
      <Divider className="border-lightGray" />

      <div className="mt-12">
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
};

export default PortfolioTab;
