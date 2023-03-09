import { AdminInstance, instance } from "../../../api/instance";
import { ISetRequest } from "../../../api";
import { IBlogAPI } from "../types";

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
