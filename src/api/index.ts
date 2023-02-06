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
  authMe: (accessToken: string) => {
    return axios.get(process.env.REACT_APP_BACK_URL + "auth/me", {
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    });
  },
  refreshToken: (accessToken: string) => {
    return axios.post(
      process.env.REACT_APP_BACK_URL + "auth/refresh-token",
      {}
    );
  },
  register: () => {
    return instance.post("auth/registration", {});
  },

  login: (fields: ILogin) => {
    return instance.post("/auth/login", fields);
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
  searchNameTerm: string;
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
