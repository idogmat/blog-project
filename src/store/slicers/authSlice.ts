import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IAuthState {
  isAuth: boolean;
}
const initialState: IAuthState = {
  isAuth: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // builder
    //     .addCase(loginTC.fulfilled, (state, action) => {
    //         state.isAuth = true;
    //     })
    //     .addCase(logOutTC.fulfilled, (state, action) => {
    //         state.isAuth = false;
    //     })
    //     .addCase(authMeTC.fulfilled, (state, action) => {
    //         state.isAuth = true;
    //     });
  },
});

export const authSlicer = authSlice.reducer;
export const AuthAC = authSlice.actions;
export const authInitialState = authSlice.getInitialState();
