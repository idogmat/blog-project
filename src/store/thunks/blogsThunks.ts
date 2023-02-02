import { createAppAsyncThunk } from "../type";
import { blogsAPI, IBlogAPI } from "../../api";

export const setBlogs = createAppAsyncThunk(
  "blogs/setBlogs",
  async (
    params: {
      pageNumber: number;
      pageSize: number;
      sortDirection: string;
      searchNameTerm: string;
    },
    thunkAPI
  ) => {
    if (params.sortDirection === "0") {
      const { data } = await blogsAPI.getBlogs({
        ...params,
        pageNumber: params.pageNumber,
        pageSize: params.pageSize,
        sortBy: "createdAt",
      });
      return { blogs: data.items };
    } else {
      const { data } = await blogsAPI.getBlogs(params);
      return { blogs: data.items };
    }
  }
);
export const addBlog = createAppAsyncThunk(
  "blogs/addBlog",
  async (fields: IBlogAPI, thunkAPI) => {
    const { data } = await blogsAPI.addBlog(fields);
    return { blog: data.items };
  }
);
