import axios from "axios";
import { IBlog } from "../store/slicers/blogsSlice";
interface ILogin {
  loginOrEmail: string;
  password: string;
}

export const instance = axios.create({
  baseURL: process.env.REACT_APP_BACK_URL,
  // withCredentials: true,
});
export const authAPI = {
  authMe: () => {
    return instance.post("/auth/me", {});
  },
  // {
  //     "login": "xaxegi5153",
  //     "password": "Qwe123456",
  //     "email": "xaxegi5153@csoft.com"
  // }
  register: () => {
    return instance.post("auth/registration", {});
  },

  login: (fields: { loginOrEmail: string; password: string }) => {
    return instance.post("/auth/login", { fields });
  },
  logout: () => {
    return instance.post("/auth/logout", {});
  },
};
interface ISetRequest {
  pageNumber: number;
  pageSize: number;
  sortDirection: string;
  sortBy: string;
}
export type IBlogAPI = Pick<IBlog, "name" | "description" | "websiteUrl">;
export const blogsAPI = {
  getBlogs: (params: Partial<ISetRequest>) => {
    return instance.get("/blogs", { params });
  },
  addBlog: (fields: IBlogAPI) => {
    return instance.post("/blogs", fields);
  },
};
export const postsAPI = {
  getPosts: (params: Partial<ISetRequest>) => {
    return instance.get("/posts", { params });
  },
};
