import axios from "axios";

import { backend_url } from "../api";
import { propertiesActions } from "./propertiesSlice";
export const getProperties = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(backend_url + "client/getproperties");

      let available = [];
      let funded = [];

      // console.log(res);

      res.data.data.forEach((prop) => {
        if (prop.isAvailable) {
          available.push(prop);
        } else {
          funded.push(prop);
        }
      });
      dispatch(propertiesActions.setProperties({ available, funded }));
    } catch (e) {
      console.log("get properties broken because ", e);
    }
  };
};
export const getAdminProperties = (client) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(backend_url + "client/getproperties");

      let available = [];
      let funded = [];

      res.data.data.forEach((prop) => {
        if (prop.isAvailable) {
          available.push(prop);
        } else {
          funded.push(prop);
        }
      });

      if (client === "admin") {
        dispatch(propertiesActions.setAdminProperties({ available, funded }));
      } else {
        dispatch(propertiesActions.setProperties({ available, funded }));
      }
    } catch (e) {
      console.log("get properties broken because ", e);
    }
  };
};
export const clientInvest = (investorId, propertyId, amount, investingDate) => {
  return async (dispatch) => {
    try {
      console.log(investorId, propertyId, amount, investingDate);
      const res = await axios.post(backend_url + "client/invest", {
        investorId,
        amount,
        investingDate,
        propertyId,
      });
      console.log(res);
      let available = [];
      let funded = [];

      // console.log(res);

      dispatch(getProperties());
    } catch (e) {
      console.log("get properties broken because ", e);
    }
  };
};
