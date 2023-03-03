import { AppAC } from "../app/slice/appSlice";

export const errorHandlingThunk = async (
  thunkAPI: any,
  logic: () => any
): Promise<any> => {
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
