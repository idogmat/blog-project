import { createAppAsyncThunk } from "../../../store/type";
import { errorHandlingThunk } from "../../../utils/errorHandling";
import { authAPI } from "../../../api";

export const authMe = createAppAsyncThunk(
  "auth/authMe",
  async (param: { accessToken: string }, thunkAPI) => {
    return errorHandlingThunk(thunkAPI, async () => {
      const res = await authAPI.authMe(param.accessToken);
      return res.data;
    });
  }
);
