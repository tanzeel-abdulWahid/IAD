import axios from "axios";
import { backend_url } from "../api";
import { authActions } from "./authSlice";

export const signin = (email, password) => {
  return async (dispatch) => {
    // console.log("Main Chala");
    try {
      //   const res = await axios.post(backend_url + "auth/login", {
      //     email,
      //     password,
      //   });
      const response = await axios.post(`${backend_url}auth/signin`, {
        email,
        password,
      });
      const res = response.data.data;

      if (res.profile.role === "user") {
        dispatch(
          authActions.setAuth({ token: res.token, profile: res.profile })
        );
      } else {
        dispatch(authActions.setAuth({ profile: res.profile }));
      }
    } catch (error) {
      // the the toast
      console.log(error);
    }
  };
};

export const callFinances = (profileId) => {
  return async (dispatch) => {
    // console.log("Main Chala");
    try {
      //   const res = await axios.post(backend_url + "auth/login", {
      //     email,
      //     password,
      //   });
      const response = await axios.get(`${backend_url}client/getuserfinances`, {
        params: {
          profileId,
        },
      });
      const { finances, profile } = response.data.data;

      dispatch(authActions.setFinances({ finances, profile }));
    } catch (error) {
      // the the toast
      console.log(error);
    }
  };
};
export const signup = (email, password, name, phoneNumber) => {
  return async (dispatch) => {
    try {
      //   const res = await axios.post(backend_url + "auth/login", {
      //     email,
      //     password,
      //   });
      const response = await axios.post(`${backend_url}auth/signup`, {
        email,
        password,
        name,
        phoneNumber,
      });
      const res = response.data.data;
      dispatch(authActions.setAuth({ token: res.token, profile: res.profile }));
    } catch (error) {
      // the the toast
      console.log(error);
    }
  };
};
