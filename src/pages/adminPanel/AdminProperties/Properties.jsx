import React, { useEffect } from "react";
import SideBar from "../../../components/AdminPanelComp/SideBar";
import AllPropertiesTab from "./AllPropertiesTab";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Properties = () => {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.authSlice.profile);
  return (
    <>
      <SideBar component={<AllPropertiesTab />} selectedKey="1" />
    </>
  );
};

export default Properties;
