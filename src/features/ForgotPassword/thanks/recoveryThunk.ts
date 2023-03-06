import { AppAC } from "../../../app/slice/appSlice";
import { createAppAsyncThunk } from "../../../store/type";
import { errorHandlingThunk } from "../../../utils/errorHandling";
import { authAPI } from "../../../api";
import { modalAC } from "../../../modals/slicer/modalsSlicer";

export const recoveryThunk = createAppAsyncThunk(
  "auth/recovery",
  async (field: string, thunkAPI) => {
    return errorHandlingThunk(thunkAPI, async () => {
      const res = await authAPI.recovery(field);
      if (res.status === 204) {
        thunkAPI.dispatch(
          AppAC.setSuccessMessage({
            message: "Check your email",
          })
        );
        thunkAPI.dispatch(modalAC.setRecoveryEmail(true));
        return field;
      }
    });
  }
);
