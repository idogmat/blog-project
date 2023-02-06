import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { authMe, login } from "../thunks/authThunk";

export interface IAuthState {
  isAuth: boolean;
  accessToken: string | null;
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
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.accessToken = action.payload.accessToken;
      })
      .addCase(authMe.fulfilled, (state, action) => {
        state.isAuth = true;
        state.user = action.payload;
      });
    //     .addCase(authMeTC.fulfilled, (state, action) => {
    //         state.isAuth = true;
    //     });
  },
});

export const authSlicer = authSlice.reducer;
export const AuthAC = authSlice.actions;
export const authInitialState = authSlice.getInitialState();
