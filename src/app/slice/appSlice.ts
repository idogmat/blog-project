import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initializeApp } from "../thunks/initializeApp";
import { IAppState } from "../types";
import { setNewPassword } from "../../features/ForgotPassword/thanks/setNewPasswordThunk";
const initialState: IAppState = {
  isLoading: false,
  error: null,
  successMessage: null,
  isInitialized: false,
};
const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<{ isLoading: boolean }>) => {
      state.isLoading = action.payload.isLoading;
    },
    setError: (state, action: PayloadAction<{ error: string | null }>) => {
      state.error = action.payload.error;
    },
    setSuccessMessage: (
      state,
      action: PayloadAction<{ message: string | null }>
    ) => {
      state.successMessage = action.payload.message;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(initializeApp.fulfilled, (state) => {
      return { ...state, isInitialized: true };
    });
    builder.addCase(setNewPassword.rejected, (state, action) => {
      return {
        ...state,
        error: action.payload.field as string,
      };
    });
  },
});

export const appSlicer = appSlice.reducer;
export const AppAC = appSlice.actions;
