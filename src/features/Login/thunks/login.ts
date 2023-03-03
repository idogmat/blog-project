import { createAppAsyncThunk } from "../../../store/type";
import { errorHandlingThunk } from "../../../utils/errorHandling";
import { authAPI } from "../../../api";
import { AppAC } from "../../../app/slice/appSlice";
import { IFields } from "../types";
import { authMe } from "./authMe";

export const login = createAppAsyncThunk(
  "auth/login",
  async (fields: IFields, thunkAPI) => {
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
