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
const initialState = {
  pagesCount: 1,
  page: 1,
  pageSize: 10,
  totalCount: 1,
  items: [] as IPost[],
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<{ posts: IPost[] }>) => {
      state.items = action.payload.posts;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setPosts.fulfilled, (state, action) => {
      state.items = action.payload.posts;
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
