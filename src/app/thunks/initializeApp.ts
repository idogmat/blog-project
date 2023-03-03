import { createAppAsyncThunk } from "../../store/type";
import { authMe } from "../../features/Login/thunks/authMe";

export const initializeApp = createAppAsyncThunk(
  "app/init",
  async (param: { accessToken: string }, thunkAPI) => {
    thunkAPI.dispatch(authMe({ accessToken: param.accessToken }));
    return { isInit: true };
  }
);
