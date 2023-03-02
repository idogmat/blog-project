import { combineReducers } from "@reduxjs/toolkit";
import { authSlicer } from "./slicers/authSlice";
import { appSlicer } from "./slicers/appSlice";
import { blogsSlicer } from "../features/Blogs/slice/blogsSlice";
import { postsSlicer } from "../features/Posts/slice/postsSlice";

export const reducers = {
  auth: authSlicer,
  app: appSlicer,
  blogs: blogsSlicer,
  posts: postsSlicer,
};

export const rootReducer = combineReducers(reducers);
