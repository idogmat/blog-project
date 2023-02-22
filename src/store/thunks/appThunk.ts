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
