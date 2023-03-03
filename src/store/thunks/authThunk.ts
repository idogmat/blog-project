import { createAppAsyncThunk } from "../type";
import { authAPI } from "../../api";
import { AppAC } from "../../app/slice/appSlice";
import { errorHandlingThunk } from "../../utils/errorHandling";
import { AxiosError } from "axios";

// export interface IUserFields {
//   loginOrEmail: string;
//   password: string;
//   rememberMe?: boolean;
// }
