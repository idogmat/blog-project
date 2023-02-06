import { createAppAsyncThunk } from "../type";
import { authAPI } from "../../api";
import { AppAC } from "../slicers/appSlice";
export interface IUserFields {
  loginOrEmail: string;
  password: string;
  rememberMe?: boolean;
}
export const authMe = createAppAsyncThunk(
  "auth/authMe",
  async (param: { accessToken: string }, thunkAPI) => {
    const { data } = await authAPI.authMe(param.accessToken);
    return data;
  }
);
export const login = createAppAsyncThunk(
  "auth/login",
  async (fields: IUserFields, thunkAPI) => {
    return errorHandlingThunk(thunkAPI, async () => {
      const { data } = await authAPI.login(fields);
      const { error, accessToken } = data;
      thunkAPI.dispatch(
        AppAC.setSuccessMessage({ message: "You have successfully authorized" })
      );
      thunkAPI.dispatch(authMe({ accessToken }));
      return { accessToken };
    });
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
