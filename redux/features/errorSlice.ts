import { createSlice } from "@reduxjs/toolkit";

export const errorSlice = createSlice({
  name: "errors",
  initialState: {
    isError: false,
    isSuccess: false,
    error: {},
    success: {},
  },
  reducers: {
    setError: (state, action) => {
      state.isError = true;
      state.isSuccess = false;
      state.error = action.payload;
    },
    setSuccess: (state, action) => {
      state.isError = false;
      state.isSuccess = true;
      state.success = action.payload;
    },
    clearMessages: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.error = {};
      state.success = {};
    },
  },
});

export const { setError, setSuccess, clearMessages } = errorSlice.actions;

export default errorSlice.reducer;
