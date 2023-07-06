import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { token: "", profile: null, finances: null },
  reducers: {
    setAuth(state, action) {
      state.token = action.payload.token;
      state.profile = action.payload.profile;
    },

    setFinances(state, action) {
      state.finances = action.payload.finances;
      state.profile = action.payload.profile;
    },
    removeAuth(state) {
      state.token = "";
      state.profile = null;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;
