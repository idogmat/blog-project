import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { addBlog, setBlogs } from "../thunks/blogsThunks";

export interface IBlog {
  id: string;
  description: string;
  websiteUrl: string;
  name: string;
  createdAt: string;
}
const initialState: IBlog[] = [];

const authSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    setBlogs: (state, action: PayloadAction<{ blogs: IBlog[] }>) => {
      return action.payload.blogs;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setBlogs.fulfilled, (state, action) => {
      return action.payload.blogs;
    });
    builder.addCase(addBlog.fulfilled, (state, action) => {
      return [action?.payload?.blog, ...state];
    });
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
