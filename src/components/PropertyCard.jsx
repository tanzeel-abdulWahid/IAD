import React from "react";
import { Link } from "react-router-dom";
import property from "../assets/property.jpeg";
import styles from "../style";

const PropertyCard = ({
  propInd,
  name,
  type,
  country,
  price,
  investors,
  annualReturn,
  lowestAmount,
  rent,
  propertyImg,
}) => {
  return (
    <div class="sm:w-1/2 lg:w-[30%] mb-10 mx-2 bg-white rounded-lg pb-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
      <Link to={`/property/${propInd}`}>
        <div class="rounded-lg h-64 overflow-hidden">
          <img
            alt="content"
            class="object-cover object-center h-full w-full"
            src={propertyImg}
          />
        </div>
        <div className="flex gap-2 pl-4 pt-2">
          <h6 className="border rounded-sm p-1 text-xs">{country}</h6>
          <h6 className="border rounded-sm p-1 text-xs">{type}</h6>
        </div>
        <div className="flex justify-between px-4 mt-5">
          <h1 className={`${styles.boldText} text-lightGreen`}>{name}</h1>
        </div>
        <div className="flex justify-between px-4 mt-5">
          <h1 className={`${styles.boldText} text-lightGreen`}>{price}</h1>
          <h1>{investors}</h1>
        </div>

        <div className="bg-gray-200 flex flex-col p-2 mx-4  mt-4 rounded-lg">
          <div className="flex justify-between">
            <h1 className="">Annualised Return</h1>
            <h1 className="font-bold">{annualReturn}</h1>
          </div>
          <div className="flex justify-between">
            <h1 className="">Lowest Amount</h1>
            <h1 className="font-bold">{lowestAmount}</h1>
          </div>
          <div className="flex justify-between">
            <h1 className="">Rent</h1>
            <h1 className="font-bold">{rent}</h1>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PropertyCard;
