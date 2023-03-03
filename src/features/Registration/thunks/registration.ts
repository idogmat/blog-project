import { createAppAsyncThunk } from "../../../store/type";
import { errorHandlingThunk } from "../../../utils/errorHandling";
import { authAPI } from "../../../api";
import { AppAC } from "../../../app/slice/appSlice";

import { IRegisterFields } from "../types";
import { authMe } from "../../Login/thunks/authMe";

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
