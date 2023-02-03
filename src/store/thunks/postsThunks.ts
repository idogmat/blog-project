import { createAppAsyncThunk } from "../type";
import { blogsAPI, IBlogAPI, postsAPI } from "../../api";
import { errorHandlingThunk } from "../../utils/errorHandling";

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
    return errorHandlingThunk(thunkAPI, async () => {
      if (params.sortDirection === "0") {
        const { data } = await postsAPI.getPosts({
          pageNumber: params.pageNumber,
          pageSize: params.pageSize,
          sortBy: "createdAt",
        });
        return { data };
      } else {
        const { data } = await postsAPI.getPosts(params);
        return { data };
      }
    });
  }
);
export const addPost = createAppAsyncThunk(
  "blogs/addPost",
  async (fields: IBlogAPI, thunkAPI) => {
    const { data } = await blogsAPI.addBlog(fields);
    return { blog: data.items };
  }
);
