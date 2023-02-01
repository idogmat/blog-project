import { createAppAsyncThunk } from "../type";
import { blogsAPI, IBlogAPI, postsAPI } from "../../api";

export const setPosts = createAppAsyncThunk(
  "blogs/setPosts",
  async (
    params: Partial<{
      pageNumber: number;
      pageSize: number;
      sortDirection: string;
    }>,
    thunkAPI
  ) => {
    if (params.sortDirection === "0") {
      const { data } = await postsAPI.getPosts({
        pageNumber: params.pageNumber,
        pageSize: params.pageSize,
        sortBy: "createdAt",
      });
      return { posts: data.items };
    } else {
      const { data } = await postsAPI.getPosts(params);
      return { posts: data.items };
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
