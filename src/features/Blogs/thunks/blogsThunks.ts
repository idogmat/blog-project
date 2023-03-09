import { createAppAsyncThunk } from "../../../store/type";

import { errorHandlingThunk } from "../../../utils/errorHandling";
import { blogsAC } from "../slice/blogsSlice";
import { blogsAPI } from "../api";
import { IBlogAPI, IFetchType, selectOptions } from "../types";

export const setBlogs = createAppAsyncThunk(
  "blogs/setBlogs",
  async (params: Partial<IFetchType>, thunkAPI) => {
    return errorHandlingThunk(thunkAPI, async () => {
      if (params.sortDirection === "0") {
        const { data } = await blogsAPI.getBlogs({
          ...params,
          pageNumber: params.pageNumber,
          pageSize: params.pageSize,
          sortBy: "createdAt",
        });
        return { data };
      } else {
        const { data } = await blogsAPI.getBlogs(params);
        return { data };
      }
    });
  }
);
export const setPostsForBlog = createAppAsyncThunk(
  "blogs/setPostsForBlog",
  async (
    params: {
      id: string;
      pageNumber: string;
      pageSize: string;
      sortDirection: keyof typeof selectOptions;
    },
    thunkAPI
  ) => {
    return errorHandlingThunk(thunkAPI, async () => {
      const { data } = await blogsAPI.getPostsForBlog(params.id, {
        ...params,
        pageNumber: params.pageNumber,
        pageSize: params.pageSize,
      });
      console.log(data);
      thunkAPI.dispatch(
        blogsAC.setPostsForBlog({ id: params.id, data: data.items })
      );
    });
  }
);
export const loadNewBlogs = createAppAsyncThunk(
  "blogs/loadNewBlogs",
  async (params: Partial<IFetchType>, thunkAPI) => {
    return errorHandlingThunk(thunkAPI, async () => {
      const { pagesCount } = thunkAPI.getState().blogs;
      const { data } = await blogsAPI.getBlogs({
        ...params,
        pageNumber: params.pageNumber,
        pageSize: params.pageSize,
      });
      thunkAPI.dispatch(blogsAC.setPageBlogs({ page: pagesCount + 1 }));
      return { data };
    });
  }
);
export const clearBlogs = createAppAsyncThunk(
  "blogs/clearBlogs",
  async (_, thunkAPI) => {
    return errorHandlingThunk(thunkAPI, async () => {
      return true;
    });
  }
);
export const addBlog = createAppAsyncThunk(
  "blogs/addBlog",
  async (fields: IBlogAPI, thunkAPI) => {
    const { data } = await blogsAPI.addBlog(fields);
    return { data };
  }
);
