import { createSlice } from "@reduxjs/toolkit";
const profilesSliceAdmin = createSlice({
  name: "profilesAdmin",
  initialState: { profiles: null },
  reducers: {
    setProfiles(state, action) {
      state.profiles = action.payload;
    },
  },
});
export const profilesAdminAction = profilesSliceAdmin.actions;
export default profilesSliceAdmin;
