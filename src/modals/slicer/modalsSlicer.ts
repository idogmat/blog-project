import { createSlice } from "@reduxjs/toolkit";

export interface IModalsState {
  recoveryEmail: boolean;
  newPassword: boolean;
}
const initialState: IModalsState = {
  recoveryEmail: false,
  newPassword: false,
};

const modals = createSlice({
  name: "modals",
  initialState,
  reducers: {
    setRecoveryEmail: (state, action) => {
      state.recoveryEmail = action.payload;
    },
    modalNewPassword: (state, action) => {
      state.newPassword = action.payload;
    },
  },
  extraReducers: (builder) => {
    // builder.addCase(login.fulfilled, (state, action) => {
    //   return {
    //     ...state,
    //     accessToken: action.payload.accessToken,
    //     isAuth: true,
    //   };
    // });
  },
});

export const modalSlicer = modals.reducer;
export const modalAC = modals.actions;
