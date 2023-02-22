import { IBlog } from "../store/slicers/blogsSlice";
import axios from "axios";
import { IRegisterFields } from "../store/thunks/authThunk";
interface ILogin {
  loginOrEmail: string;
  password: string;
}

export const AdminInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    Authorization: "Basic YWRtaW46cXdlcnR5",
  },
});
export const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true,
});
const supportToken = (): any => {
  let token: { current: string } = {
    current: "",
  };
  function setToken(newToken: string) {
    newToken && (token.current = newToken);
    localStorage.setItem("token", newToken);
  }
  return [token, setToken];
};
export function dontBelieveBackend(): any {
  const [token, setToken] = supportToken();
  const instance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {
      Authorization: `Bearer ${token.current}`,
    },
  });
  return { instance, setToken };
}
export const authAPI = {
  authMe: (accessToken: string) => {
    return axios.get(import.meta.env.VITE_BASE_URL + "auth/me", {
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
      customDomain: "http://localhost:3000/#/confirmEmail",
    });
  },
  recovery: (email: string) => {
    return instance.post("auth/password-recovery", {
      email,
      customDomain: "http://localhost:3000/#/confirmEmail",
    });
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
