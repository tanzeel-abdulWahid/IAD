import React, { useEffect } from "react";
import PropertiesTabs from "./PropertiesTabs";
import SidebarLayout from "../../components/SidebarLayout";
import { useDispatch, useSelector } from "react-redux";
import { getProperties } from "../../store/propertiesActions";
import { uiActions } from "../../store/uiSlice";

const HomePage = () => {
  const dispatch = useDispatch();
  const toast = useSelector((state) => state.uiSlice.toast);
  useEffect(() => {
    console.log("homepage ready");
    dispatch(uiActions.setToast(true));
    dispatch(getProperties());
    dispatch(uiActions.setToast(false));
  }, []);
  return (
    <>
      {toast && <div className="absolute top-1/2 left-1/2">Waiting</div>}

      <SidebarLayout component={<PropertiesTabs />} selectedKey="1" />
    </>
  );
};

export default HomePage;
