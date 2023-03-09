import { IPostAPI, ISetRequest } from "../../../api";
import { AdminInstance, instance } from "../../../api/instance";

export const postsAPI = {
  getPosts: (params: Partial<ISetRequest>) => {
    return instance.get("/posts", { params });
  },
  addPost: (fields: IPostAPI) => {
    return AdminInstance.post("/blogs", fields);
  },
};
