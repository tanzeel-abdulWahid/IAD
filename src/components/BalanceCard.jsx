import React from "react";
import styles from "../style";
import { StarOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import CustomButton from "./CustomButton";

const BalanceCard = ({ heading, amount, btns, icon, setopen }) => {
  return (
    <div className="flex justify-between md:flex-row md:w-[48%] p-2 md:p-5 bg-white rounded-lg">
      <div className=" flex flex-col justify-evenly">
        <h1 className="font-normal md:text-lg">{heading}</h1>
        <h1 className={`${styles.boldText} text-lightGreen md:text-3xl mt-3`}>
          {amount}
        </h1>
      </div>
      {btns ? (
        <div className=" flex flex-col justify-evenly gap-y-2 w-40 items-center">
          {/* <Link className={`md:${styles.boldText} w-full text-center px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-lightGreen text-white inline-block`}>
                            <span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-white group-hover:h-full opacity-90"></span>
                            <span class="relative group-hover:text-lightGreen">Deposit</span>   
                        </Link> */}

          <Link className="w-full">
            <CustomButton
              type="button"
              text="Deposit"
              onClick={() => {
                setopen(true);
              }}
            />
          </Link>
          {/* <h1 className={`md:${styles.boldText} cursor-pointer bg-creamWhite w-full text-center rounded-lg p-2`}>withdraw</h1> */}
          <Link
            className={`md:${styles.boldText} w-full text-center px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-creamWhite text-lightGreen inline-block`}
          >
            <span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-lightGreen group-hover:h-full opacity-90"></span>
            <span class="relative group-hover:text-white">Withdraw</span>
          </Link>
        </div>
      ) : (
        <div className=" flex  items-center">
          {/* <StarOutlined className='text-6xl text-lightGreen' /> */}
          {icon}
        </div>
      )}
    </div>
  );
};

export default BalanceCard;
