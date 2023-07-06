import { Divider } from "antd";
import React from "react";
import styles from "../../style";

const priceDetails = [
  { heading: "Property Price", price: "$736,154" },
  { heading: "Transaction Cost", price: "$250" },
  { heading: "Stake fees", price: "1.5%" },
];

const valueAppreciation = [
  { heading: "Value appreciation", percent: "30%" },
  { heading: "Annual Return", percent: "17.6%" },
];
const FinancialDetails = ({ details, price }) => {
  const { annualReturn, rent, stakeFee, transactionCost, valueAppr } = details;

  console.log(price);

  return (
    <>
      {/* Financial Details */}
      <h1
        className={`${styles.boldText} text-lightGreen font-bold md:text-3xl pt-14 pb-5`}
      >
        Financial Details
      </h1>

      <div className="flex justify-between gap-x-5">
        <div className="w-1/2 text-lg">
          <h1 className="font-bold text-[20px] mt-2 text-gray-500">
            Propery Cost
          </h1>
          <Divider />

          <div className="flex justify-between py-2">
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
          </div>

          <Divider />
          <div className="flex justify-between">
            <h1 className="font-thin text-sm md:text-lg">Invesment Cost</h1>
            <h1 className="font-semibold text-sm md:text-lg">
              ${" "}
              {(
                price +
                (price / 100) * transactionCost +
                stakeFee
              ).toLocaleString()}
            </h1>
          </div>

          <div className="flex flex-wrap lg:flex-nowrap gap-y-3 gap-x-2 justify-between mt-6">
            <div className="bg-white p-3 w-60 rounded-lg text-center  bg-gradient-to-br from-sky-600 to-sky-900 shadow-lg">
              <h1 className="font-thin text-sm md:text-lg text-gray-100">
                Annual Return
              </h1>
              <h1 className="font-semibold text-sm md:text-2xl text-white">
                {annualReturn} %
              </h1>
            </div>
            <div className="bg-white p-3 w-60 rounded-lg text-center  bg-gradient-to-br from-sky-600 to-sky-900 shadow-lg">
              <h1 className="font-thin text-sm md:text-lg text-gray-100">
                Annual Return
              </h1>
              <h1 className="font-semibold text-sm md:text-2xl text-white">
                {valueAppr} %
              </h1>
            </div>
          </div>
        </div>

        {/* <div className='w-1/2 text-lg'>
                    <h1 className='font-bold'>Propery Cost</h1>
                    {priceDetails.map((detail, i) => (
                        <div className='flex justify-between py-2'>
                            <h1 className='font-thin text-sm md:text-lg'>{detail.heading}</h1>
                            <h1 className='font-semibold text-sm md:text-lg'>{detail.price}</h1>
                        </div>
                    ))}
                    <Divider />
                    <div className='flex justify-between'>
                        <h1 className='font-thin text-sm md:text-lg'>Invesment Cost</h1>
                        <h1 className='font-semibold text-sm md:text-lg'>855,856 ৳</h1>
                    </div>

                    <div className='flex flex-wrap gap-y-3 lg:flex-nowrap gap-x-2 justify-between mt-6'>
                        {valueAppreciation.map((value, i) => (
                            <div key={i} className='bg-white p-3 rounded-lg text-center  bg-blue-gradient'>
                                <h1 className='font-thin text-sm md:text-lg'>{value.heading}</h1>
                                <h1 className='font-semibold text-sm md:text-lg'>{value.percent}</h1>
                            </div>
                        ))}
                    </div>
                </div> */}
      </div>

      <h1 className="text-base pt-7 font-thin text-gray-500">
        * Projections based on a 5 year holding period. You can view the
        Investment Memorandum in the Documentation section for a full financial
        breakdown
      </h1>
    </>
  );
};

export default FinancialDetails;
