import { AppAC } from "../../../store/slicers/appSlice";
import { createAppAsyncThunk } from "../../../store/type";
import { errorHandlingThunk } from "../../../utils/errorHandling";
import { authAPI } from "../../../api";

export const recoveryThunk = createAppAsyncThunk(
  "auth/recovery",
  async (field: string, thunkAPI) => {
    return errorHandlingThunk(thunkAPI, async () => {
      const res = await authAPI.recovery(field);
      if (res.data.success) {
        thunkAPI.dispatch(
          AppAC.setSuccessMessage({
            message: "Check your email",
          })
        );
        return field;
      }
    });
  }
);