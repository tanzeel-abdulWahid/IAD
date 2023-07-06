import { createSlice } from "@reduxjs/toolkit";

const propertiesSliceAdmin = createSlice({
  name: "propertiesAdmin",
  initialState: { client: {}, admin: { available: [], funded: [] } },
  reducers: {
    setProperties(state, action) {
      state.admin.available = action.payload.available;
      state.admin.funded = action.payload.funded;
    },
    removeProperties(state) {
      state.admin.available = [];
      state.admin.funded = [];
    },
  },
});

export const propertiesAdminActions = propertiesSliceAdmin.actions;
export default propertiesSliceAdmin;
