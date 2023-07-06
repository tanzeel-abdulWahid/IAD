import React from "react";

const DepositModal = ({ open, setopen, children }) => {
  return (
    <>
      <div
        className="w-full h-screen absolute top-0 left-0"
        onClick={() => {
          setopen(false);
        }}
      ></div>
      <div className="absolute z-20 top-[50vh] w-[40%] left-1/2 -translate-y-1/2 -translate-x-1/2 p-3 bg-white ring-1 ring-gray-200 rounded-md shadow-lg">
        {children}
      </div>
    </>
  );
};

export default DepositModal;
