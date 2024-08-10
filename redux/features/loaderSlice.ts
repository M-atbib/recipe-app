import { createSlice } from "@reduxjs/toolkit";

export const loaderSlice = createSlice({
  name: "loader",
  initialState: {
    isLoading: false,
    message: "",
  },
  reducers: {
    startLoading: (state, action) => {
      state.isLoading = true;
      state.message = action.payload || "";
    },
    stopLoading: (state) => {
      state.isLoading = false;
      state.message = "";
    },
  },
});

export const { startLoading, stopLoading } = loaderSlice.actions;

export default loaderSlice.reducer;
