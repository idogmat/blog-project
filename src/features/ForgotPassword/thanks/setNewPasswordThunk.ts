import { AppAC } from "../../../app/slice/appSlice";
import { createAppAsyncThunk } from "../../../store/type";
import { errorHandlingThunk } from "../../../utils/errorHandling";
import { authAPI } from "../../../api";
import { AxiosError } from "axios";

export const setNewPassword = createAppAsyncThunk(
  "auth/setNewPassword",
  async (
    param: { newPassword: string; recoveryCode: string },
    { dispatch, rejectWithValue }
  ) => {
    try {
      const res = await authAPI.setNewPassword(param);
      if (res.data.success) {
        dispatch(
          AppAC.setSuccessMessage({
            message: "Check your email",
          })
        );
        return res.data.success;
      }
    } catch (e: any) {
      return rejectWithValue(e.response.data.errorsMessages[0]);
    }
  }
);
