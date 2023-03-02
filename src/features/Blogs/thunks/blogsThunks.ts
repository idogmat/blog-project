import { createAppAsyncThunk } from "../../../store/type";
import { blogsAPI, IBlogAPI } from "../../../api";
import { errorHandlingThunk } from "../../../utils/errorHandling";
import { blogsAC } from "../slice/blogsSlice";
import { useAllSelector } from "../../../utils/hooks";
import { blogsStateSelector } from "../../../store/selectors";

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
      pageNumber: number;
      pageSize: number;
      sortDirection: string;
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
  async (
    params: {
      pageNumber: number;
      pageSize: number;
    },
    thunkAPI
  ) => {
    return errorHandlingThunk(thunkAPI, async () => {
      const { pagesCount } = thunkAPI.getState().blogs;
      const { data } = await blogsAPI.getBlogs({
        ...params,
        pageNumber: params.pageNumber,
        pageSize: params.pageSize,
      });
      thunkAPI.dispatch(blogsAC.setPageBlogs({ page: params.pageNumber }));
      return { data };
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
