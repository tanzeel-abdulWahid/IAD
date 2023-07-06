import React from "react";
import property from "../assets/property.jpeg";
import property2 from "../assets/property2.jpeg";
import PropertyCard from "./PropertyCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import PropertyCardFunded from "./PropertyCardFunded";

const FundedProperties = () => {
  const properties = useSelector(
    (state) => state.propertiesSlice.client.funded
  );

  return (
    <>
      <div className=" py-5 mx-auto">
        <div className="md:flex md:justify-center lg:justify-start items-center flex-wrap -mx-4 -mb-10">
          {properties.map((i, index) => {
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
              numInvestors,
            } = i;
            return (
              <PropertyCardFunded
                key={"index"}
                name="Studio in Dubai"
                country="Dubai"
                type="Holiday"
                price={`$ ${totalValue.toLocaleString()}`}
                investors={`${numInvestors} Investors`}
                annualReturn="11.10%"
                fundedDate="12 Jan 2023"
                CurrentValue="$ 760,000"
                propertyImg={property}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FundedProperties;
