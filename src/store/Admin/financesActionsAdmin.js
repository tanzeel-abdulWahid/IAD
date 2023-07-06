import axios from "axios";
import { backend_url } from "../../api";
import { financesActionsAdmin } from "./financesSliceAdmin";

export const fetchMoneyRequests = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(backend_url + "admin/getmoneyrequest");
      const resData = res.data.data;
      dispatch(financesActionsAdmin.setFinances(resData));
    } catch (e) {
      console.log(e);
    }
  };
};
export const approveMoneyRequests = (tId, profile) => {
  return async (dispatch) => {
    try {
      await axios.post(backend_url + "admin/approverequest", {
        profile: profile,
        transactionId: tId,
      });
      const res = await axios.get(backend_url + "admin/getmoneyrequest");
      const resData = res.data.data;
      dispatch(financesActionsAdmin.setFinances(resData));
      //   dispatch(financesActionsAdmin.setFinances(resData));
    } catch (e) {
      console.log(e);
    }
  };
};
