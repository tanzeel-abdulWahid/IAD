import React from "react";
import styles from "../style";

const CustomButton = ({ text, type, stateAction, newState, ...rest }) => {
  return (
    <button
      {...rest}
      type={type}
      className={`bg-lightGreen p-2 w-full rounded-lg text-white mt-5 relative group focus:ring-4 focus:ring-blue-300 focus:outline-none ${styles.flexCenter} ${styles.boldText}`}
    >
      {/* <h1 className={`text-white ${styles.flexCenter} ${styles.boldText}`}>{text}</h1> */}
      <span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-white group-hover:h-full opacity-90"></span>
      <span class="relative group-hover:text-lightGreen">{text}</span>
    </button>
  );
};

export default CustomButton;
