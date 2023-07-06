import { createSlice } from "@reduxjs/toolkit";

const financesSliceAdmin = createSlice({
  name: "financesAdmin",
  initialState: { moneyRequests: null },
  reducers: {
    setFinances(state, action) {
      state.moneyRequests = action.payload;
    },
    removeFinances(state) {
      state.moneyRequests = null;
    },
  },
});

export const financesActionsAdmin = financesSliceAdmin.actions;
export default financesSliceAdmin;
