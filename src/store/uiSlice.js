import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { toast: false },
  reducers: {
    setToast(state, action) {
      state.toast = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
