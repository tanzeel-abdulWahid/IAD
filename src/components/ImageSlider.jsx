import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import property from "../assets/property.jpeg";
import property2 from "../assets/property2.jpeg";

import styles from "../style";

function ImageSlider({ url }) {
  const slides = [
    { url },
    // {url: property2},
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="h-[550px] w-full m-auto relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-lg bg-center bg-cover duration-500"
      ></div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl bg-gray-400  p-2 rounded-full cursor-pointer">
        <LeftOutlined
          className={`${styles.flexCenter} text-3xl text-black font-extrabold`}
          onClick={prevSlide}
          size={30}
        />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full bg-gray-400 p-2 cursor-pointer">
        <RightOutlined
          className={`${styles.flexCenter} text-3xl text-black font-extrabold`}
          onClick={nextSlide}
          size={30}
        />
      </div>
    </div>
  );
}

export default ImageSlider;
