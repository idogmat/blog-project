import { createAppAsyncThunk } from "../type";
import { authAPI } from "../../api";
import { AppAC } from "../slicers/appSlice";
import { errorHandlingThunk } from "../../utils/errorHandling";
export interface IUserFields {
  loginOrEmail: string;
  password: string;
  rememberMe?: boolean;
}
export interface IRegisterFields {
  login: string;
  email: string;
  password: string;
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
export const register = createAppAsyncThunk(
  "auth/register",
  async (fields: IRegisterFields, thunkAPI) => {
    return errorHandlingThunk(thunkAPI, async () => {
      const { data } = await authAPI.register(fields);
      const { error, accessToken } = data;
      thunkAPI.dispatch(
        AppAC.setSuccessMessage({ message: "You have successfully authorized" })
      );
      thunkAPI.dispatch(authMe({ accessToken }));
      return { accessToken };
    });
  }
);
