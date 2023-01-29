import {createAppAsyncThunk} from "./type";
import {authMeTC} from "./authThunk";


export const initAppTC = createAppAsyncThunk(
    "app/init",
    async (_, thunkAPI) => {
        await thunkAPI.dispatch(authMeTC());
        return { isInit: true };
    }
);
