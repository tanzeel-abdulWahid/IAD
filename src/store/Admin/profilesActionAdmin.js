import axios from "axios";
import { backend_url } from "../../api";
import { profilesAdminAction } from "./profilesSliceAdmin";

export const fetchProfiles = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(backend_url + "admin/getuserprofiles");
      const data = res.data.data;
      console.log(data);
      dispatch(profilesAdminAction.setProfiles(data));
    } catch (e) {
      console.log(e);
    }
  };
};
