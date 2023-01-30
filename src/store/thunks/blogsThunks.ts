import { createAppAsyncThunk } from "../type";
import { authAPI, blogsAPI, IBlogAPI } from "../../api";

export const setBlogs = createAppAsyncThunk(
  "blogs/setBlogs",
  async (_, thunkAPI) => {
    const { data } = await blogsAPI.getBlogs();
    return { blogs: data.items };
  }
);
export const addBlog = createAppAsyncThunk(
  "blogs/addBlog",
  async (fields: IBlogAPI, thunkAPI) => {
    const { data } = await blogsAPI.addBlog(fields);
    return { blog: data.items };
  }
);
