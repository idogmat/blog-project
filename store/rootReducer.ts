import { combineReducers } from "@reduxjs/toolkit";
import { authSlicer } from "./slicers/authSlice";
import { appSlicer } from "./slicers/appSlice";
import { blogsSlicer } from "./slicers/blogsSlice";
import { postsSlicer } from "./slicers/postsSlice";

export const reducers = {
  auth: authSlicer,
  app: appSlicer,
  blogs: blogsSlicer,
  posts: postsSlicer,
};

export const rootReducer = combineReducers(reducers);
