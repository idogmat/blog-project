import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { authMe, login } from "../thunks/authThunk";
import { IBlog } from "../../features/Blogs/slice/blogsSlice";
import { recoveryThunk } from "../../features/ForgotPassword/thanks/recoveryThunk";

export interface IAuthState {
  isAuth: boolean;
  isAdmin: boolean;
  accessToken: string | null;
  isInitialized: boolean;
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
  isAdmin: false,
  isInitialized: false,
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
    builder.addCase(login.fulfilled, (state, action) => {
      return {
        ...state,
        accessToken: action.payload.accessToken,
        isAuth: true,
      };
    });
    builder.addCase(authMe.fulfilled, (state, action) => {
      return action.payload
        ? {
            ...state,
            isAuth: true,
            isInitialized: true,
            user: action.payload,
          }
        : state;
    });
    builder.addCase(authMe.rejected, (state, action) => {
      return {
        ...state,
        user: null,
        isAuth: false,
        isInitialized: true,
      };
    });
    builder.addCase(recoveryThunk.fulfilled, (state, action) => {
      return {
        ...state,
        recoveryEmail: action.meta.arg,
      };
    });
    //     .addCase(authMeTC.fulfilled, (state, action) => {
    //         state.isAuth = true;
    //     });
  },
});

export const authSlicer = authSlice.reducer;
export const AuthAC = authSlice.actions;
export const authInitialState = authSlice.getInitialState();
