import { createAppAsyncThunk } from "../../../store/type";
import { errorHandlingThunk } from "../../../utils/errorHandling";
import { authAPI } from "../../../api";

export const logout = createAppAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    return errorHandlingThunk(thunkAPI, async () => {
      const res = await authAPI.logout();
      localStorage.removeItem("accessToken");
      console.log(res);
      return null;
    });
  }
);
