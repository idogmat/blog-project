import { AdminInstance, API_URL, instance } from "./instance";
import { ILogin } from "./typse";
import { IRegisterFields } from "../features/Registration/types";
import axios from "axios";
import { IBlog } from "../features/Blogs/types";

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
  pageNumber: number;
  pageSize: number;
  sortDirection: string;
  sortBy: string;
  searchNameTerm: string;
}
export type IBlogAPI = Pick<IBlog, "name" | "description" | "websiteUrl">;
export type IPostAPI = {
  title: string;
  shortDescription: string;
  content: string;
  blogId: string;
};
export const blogsAPI = {
  getBlogs: (params: Partial<ISetRequest>) => {
    return instance.get("/blogs", { params });
  },
  addBlog: (fields: IBlogAPI) => {
    return AdminInstance.post("/blogs", fields);
  },
  getPostsForBlog: (id: string, params: Partial<ISetRequest>) => {
    return instance.get(`/blogs/${id}/posts`, { params });
  },
};
export const postsAPI = {
  getPosts: (params: Partial<ISetRequest>) => {
    return instance.get("/posts", { params });
  },
  addPost: (fields: IPostAPI) => {
    return AdminInstance.post("/blogs", fields);
  },
};
