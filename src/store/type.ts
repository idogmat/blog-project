import {RootState} from "./store";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {AppDispatchType} from "../utils/hooks";

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
    state: RootState;
    dispatch: AppDispatchType;
    rejectValue: any;
}>();