import React from "react";
import heroImage from "../assets/onboarding-dark.jpg";
import logo from "../assets/stake-white.svg";
import styles from "../style";
const HeroImgComp = () => {
  return (
    <>
      <img
        src={heroImage}
        className="h-screen w-full object-fit-cover"
        alt="image"
      />
      <div className={`absolute p-4 top-2 left-[45%] bg-gray-300 rounded-md`}>
        <img className="w-20" src={"/logo.webp"} />
      </div>
      <div className={`absolute p-4 top-[40%] left-[30%]`}>
        <div className={`${styles.flexCenter} flex-col`}>
          <h1 className="text-4xl text-white font-bold">Say hello</h1>
          <h1 className="text-4xl text-white font-bold">to passive income</h1>
        </div>
      </div>
    </>
  );
};

export default HeroImgComp;
