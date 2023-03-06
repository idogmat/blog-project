import { combineReducers } from "@reduxjs/toolkit";
import { authSlicer } from "./slicers/authSlice";
import { appSlicer } from "../app/slice/appSlice";
import { blogsSlicer } from "../features/Blogs/slice/blogsSlice";
import { postsSlicer } from "../features/Posts/slice/postsSlice";
import { modalSlicer } from "../modals/slicer/modalsSlicer";

export const reducers = {
  auth: authSlicer,
  app: appSlicer,
  blogs: blogsSlicer,
  posts: postsSlicer,
  modals: modalSlicer,
};

export const rootReducer = combineReducers(reducers);
