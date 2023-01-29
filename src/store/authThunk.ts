import {createAppAsyncThunk} from "./type";

export const authMeTC = createAppAsyncThunk(
    "auth/authMe",
    async (_, thunkAPI) => {
        const { data } = await authMe();
        return data;
    }
);