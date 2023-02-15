import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initializeApp } from "../thunks/appThunk";

export interface IAppState {
  isLoading: boolean;
  error: string | null;
  successMessage: string | null;
  isInitialized: boolean;
}

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
    setIsLoading: (draft, action: PayloadAction<{ isLoading: boolean }>) => {
      draft.isLoading = action.payload.isLoading;
    },
    setError: (draft, action: PayloadAction<{ error: string | null }>) => {
      draft.error = action.payload.error;
    },
    setSuccessMessage: (
      draft,
      action: PayloadAction<{ message: string | null }>
    ) => {
      draft.successMessage = action.payload.message;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(initializeApp.fulfilled, (state) => {
      state.isInitialized = true;
    });
  },
});

export const appSlicer = appSlice.reducer;
export const AppAC = appSlice.actions;
