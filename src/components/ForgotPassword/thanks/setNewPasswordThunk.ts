import { AppAC } from "../../../store/slicers/appSlice";
import { createAppAsyncThunk } from "../../../store/type";
import { errorHandlingThunk } from "../../../utils/errorHandling";
import { authAPI } from "../../../api";

export const setNewPassword = createAppAsyncThunk(
  "auth/setNewPassword",
  async (param: { newPassword: string; recoveryCode: string }, thunkAPI) => {
    return errorHandlingThunk(thunkAPI, async () => {
      const res = await authAPI.setNewPassword(param);
      if (res.data.success) {
        thunkAPI.dispatch(
          AppAC.setSuccessMessage({
            message: "Check your email",
          })
        );
        return res.data.success;
      }
    });
  }
);
