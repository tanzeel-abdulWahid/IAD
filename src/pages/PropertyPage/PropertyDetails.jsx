import React from "react";
import SidebarLayout from "../../components/SidebarLayout";
import PropertyDetailsTab from "./PropertyDetailsTab";

const PropertyDetails = () => {
  return <SidebarLayout component={<PropertyDetailsTab />} selectedKey="1" />;
};

export default PropertyDetails;
