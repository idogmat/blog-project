import { createAppAsyncThunk } from "../type";
import { authMe } from "./authThunk";
import { AppAC } from "../slicers/appSlice";

export const initializeApp = createAppAsyncThunk(
  "app/init",
  async (_, thunkAPI) => {
    const accessToken = thunkAPI.getState().auth.accessToken;
    accessToken && thunkAPI.dispatch(authMe({ accessToken }));
    return { isInit: true };
  }
);
export const errorHandlingThunk = async (thunkAPI: any, logic: Function) => {
  thunkAPI.dispatch(AppAC.setIsLoading({ isLoading: true }));
  try {
    return await logic();
  } catch (e: any) {
    const error = e.response ? e.response.data.error : e.message;
    thunkAPI.dispatch(AppAC.setError({ error }));
    return thunkAPI.rejectWithValue(error);
  } finally {
    thunkAPI.dispatch(AppAC.setIsLoading({ isLoading: false }));
  }
};
