import { createSlice } from "@reduxjs/toolkit";

const propertiesSlice = createSlice({
  name: "properties",
  initialState: {
    client: { available: [], funded: [] },
    admin: { available: [], funded: [] },
  },
  reducers: {
    setProperties(state, action) {
      state.client.available = action.payload.available;
      state.client.funded = action.payload.funded;
    },
    setAdminProperties(state, action) {
      state.admin.available = action.payload.available;
      state.admin.funded = action.payload.funded;
    },
    removeProperties(state) {
      state.client.available = [];
      state.client.funded = [];
    },
  },
});

export const propertiesActions = propertiesSlice.actions;
export default propertiesSlice;
