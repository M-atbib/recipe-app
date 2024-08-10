import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { useDispatch as useReduxDispatch } from "react-redux";
import { authReducer, loaderReducer, errorReducer } from "./features";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    loader: loaderReducer,
    errors: errorReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useReduxDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
