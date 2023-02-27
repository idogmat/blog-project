import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { authMe, login } from "../thunks/authThunk";
import { IBlog } from "./blogsSlice";
import { recoveryThunk } from "../../components/ForgotPassword/thanks/recoveryThunk";

export interface IAuthState {
  isAuth: boolean;
  isAdmin: boolean;
  accessToken: string | null;
  isLogged: boolean;
  recoveryEmail: string;
  user: {
    login: string;
    email: string;
    userId: string;
  } | null;
}
const initialState: IAuthState = {
  isAuth: false,
  user: null,
  accessToken: null,
  isAdmin: true,
  isLogged: false,
  recoveryEmail: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // setRecoveryEmail: (state, action) => {
    //   state.recoveryEmail = action.payload.email;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.accessToken = action.payload.accessToken;
        state.isLogged = true;
      })
      .addCase(authMe.fulfilled, (state, action) => {
        state.isAuth = true;
        state.user = action.payload;
      })
      .addCase(recoveryThunk.fulfilled, (state, action) => {
        state.recoveryEmail = action.meta.arg;
      });
    //     .addCase(authMeTC.fulfilled, (state, action) => {
    //         state.isAuth = true;
    //     });
  },
});

export const authSlicer = authSlice.reducer;
export const AuthAC = authSlice.actions;
export const authInitialState = authSlice.getInitialState();
