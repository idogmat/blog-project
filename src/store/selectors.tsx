import { RootState } from "./store";
import { IAuthState } from "./slicers/authSlice";
import { IAppState } from "../app/types";
import { IStatePosts } from "../features/Posts/types";
import { IStateBlogs } from "../features/Blogs/types";

export const authStateSelector = (state: RootState): IAuthState => state.auth;
export const appStateSelector = (state: RootState): IAppState => state.app;
export const blogsStateSelector = (state: RootState): IStateBlogs =>
  state.blogs;
export const postsOnBlogStateSelector = (
  state: RootState
): IStateBlogs["items"] => state.blogs.items;
export const postsStateSelector = (state: RootState): IStatePosts =>
  state.posts;
export const recoveryEmailStateSelector = (state: RootState): string =>
  state.auth.recoveryEmail;
export const errorStateSelector = (state: RootState): string | null =>
  state.app.error;
