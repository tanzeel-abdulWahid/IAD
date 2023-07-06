import React from "react";
import propertyImg from "../assets/property.jpeg";
import property2 from "../assets/property2.jpeg";
import PropertyCard from "./PropertyCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const AvailableProperties = () => {
  const properties = useSelector(
    (state) => state.propertiesSlice.client.available
  );

  return (
    <>
      <div className=" py-5 mx-auto">
        <div className="md:flex md:justify-center lg:justify-start items-center flex-wrap -mx-4 -mb-10">
          {properties.map((i, index) => {
            const { property, isAvailable, investedAmount, numInvestors } = i;
            const {
              propertyName,
              totalValue,
              city,
              location,
              lowestValue,
              propertyFeatures,
              financialDetails,
              fundingTimeline,
              locationDetails,
              image,
            } = property;
            return (
              <PropertyCard
                key={index}
                propInd={index}
                name={propertyName}
                country={city}
                type="Holiday"
                price={`$ ${totalValue.toLocaleString()}`}
                investors={`${numInvestors} Investors`}
                annualReturn={`${financialDetails.valueAppr}%`}
                lowestAmount={`$ ${lowestValue}`}
                rent={`$ ${financialDetails.rent}`}
                propertyImg={image}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AvailableProperties;
