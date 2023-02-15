import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { setPosts } from "../thunks/postsThunks";

export interface IPost {
  id: string;
  blogId: string;
  content: string;
  shortDescription: string;
  title: string;
  blogName: string;
  createdAt: string;
}
interface IState {
  pagesCount: number;
  page: number;
  pageSize: number;
  totalCount: number;
  items: IPost[];
}
const initialState: IState = {
  pagesCount: 1,
  page: 1,
  pageSize: 10,
  totalCount: 1,
  items: [],
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      return action.payload.data.items;
    },
    setPagePosts: (state, action) => {
      state.page = action.payload.page;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setPosts.fulfilled, (state, action) => {
      state.items = action.payload.data.items;
    });
    // builder.addCase(addBlog.fulfilled, (state, action) => {
    //   return [action?.payload?.blog, ...state];
    // });
  },
  //     .addCase(logOutTC.fulfilled, (state, action) => {
  //         state.isAuth = false;
  //     })
  //     .addCase(authMeTC.fulfilled, (state, action) => {
  //         state.isAuth = true;
  //     });
  // },
});

export const postsSlicer = postsSlice.reducer;
export const postsAC = postsSlice.actions;
