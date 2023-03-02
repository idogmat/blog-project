import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  addBlog,
  loadNewBlogs,
  setBlogs,
  setPostsForBlog,
} from "../thunks/blogsThunks";

export interface IPostsInBlog {
  blogId: string;
  blogName: string;
  content: string;
  createdAt: string;
  extendedLikesInfo: {
    likesCount: number;
    dislikesCount: number;
    myStatus: string;
    newestLikes: any[];
  };
  id: string;
  shortDescription: string;
  title: string;
}

export interface IBlog {
  id: string;
  description: string;
  websiteUrl: string;
  name: string;
  createdAt: string;
  posts: IPostsInBlog[];
}

interface IState {
  page: number;
  pageSize: number;
  pagesCount: number;
  totalCount: number;
  items: {
    [key: string]: IBlog;
  };
}

const initialState: IState = {
  page: 1,
  pageSize: 10,
  pagesCount: 4,
  totalCount: 33,
  items: {},
};

const authSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    setBlogs: (state, action) => {
      action.payload.data.forEach((e: IBlog) => (state.items[e.id] = e));
    },
    setPageBlogs: (state, action) => {
      state.page = action.payload.page;
    },
    setPostsForBlog: (state, action) => {
      state.items[action.payload.id].posts.push(...action.payload.data);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setBlogs.fulfilled, (state, action) => {
      return { ...action.payload.data };
    });
    builder.addCase(loadNewBlogs.fulfilled, (state, action) => {
      const newItems = action.payload.data.items.reduce(
        (acc: { [key: string]: IBlog }, e: IBlog) => {
          acc[e.id] = e;
          return acc;
        },
        {}
      );
      return {
        ...state,
        items: {
          ...state.items,
          ...newItems,
        },
      };
    });
    // builder.addCase(setPostsForBlog.fulfilled, (state, action) => {
    //   if (action.payload.data) {
    //     return action.payload.id && ;
    //   } else {
    //     return state;
    //   }
    //
    // });
    // builder.addCase(addBlog.fulfilled, (state, action) => {
    //   return {
    //     ...state,
    //     items: [...action?.payload?.data.items, ...state.items],
    //   };
    // });
    //     .addCase(logOutTC.fulfilled, (state, action) => {
    //         state.isAuth = false;
    //     })
    //     .addCase(authMeTC.fulfilled, (state, action) => {
    //         state.isAuth = true;
    //     });
  },
});

export const blogsSlicer = authSlice.reducer;
export const blogsAC = authSlice.actions;
