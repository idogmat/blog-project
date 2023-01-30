import { combineReducers } from "@reduxjs/toolkit";
import { authSlicer } from "./slicers/authSlice";
import { appSlicer } from "./slicers/appSlice";
import { blogsSlicer } from "./slicers/blogsSlice";

export const reducers = {
  auth: authSlicer,
  app: appSlicer,
  blogs: blogsSlicer,
};

export const rootReducer = combineReducers(reducers);
