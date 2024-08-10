import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  isAuth: boolean;
  email: string;
  password: string;
}

interface InitialState {
  value: AuthState;
}

const initialState = {
  value: {
    isAuth: false,
    email: "",
    password: "",
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: () => {
      return initialState;
    },

    login: (
      state,
      action: PayloadAction<{ email: string; password: string }>
    ) => {
      console.log(action);
      return {
        value: {
          isAuth: true,
          email: action.payload.email,
          password: action.payload.password,
        },
      };
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
