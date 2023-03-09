import { AdminInstance, API_URL, instance } from "./instance";
import { ILogin } from "./typse";
import { IRegisterFields } from "../features/Registration/types";
import axios from "axios";
import { IBlog, selectOptions } from "../features/Blogs/types";

export const authAPI = {
  authMe: (accessToken: string) => {
    return instance.get("auth/me", {
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    });
  },
  refreshToken: () => {
    return instance.post("auth/refresh-token", {});
  },
  register: (fields: IRegisterFields) => {
    return instance.post("auth/registration", {
      ...fields,
      customDomain: import.meta.env.VITE_CONFIRM_EMAIL,
    });
  },
  registerConfirm: (code: string) => {
    return instance.post("auth/registration-confirmation", { code });
  },
  recovery: (email: string) => {
    return instance.post("auth/password-recovery", {
      email,
      customDomain: import.meta.env.VITE_RECOVERY_PWD,
    });
  },
  setNewPassword: (fields: { newPassword: string; recoveryCode: string }) => {
    return axios.post(`${API_URL}auth/new-password`, fields);
  },

  login: (fields: ILogin) => {
    return instance.post("/auth/login", fields);
  },
  logout: () => {
    return instance.post("/auth/logout", {});
  },
};
export interface ISetRequest {
  pageNumber: string;
  pageSize: string;
  sortDirection: keyof typeof selectOptions;
  sortBy: string;
  searchNameTerm: string;
}
