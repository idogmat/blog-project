import { RootState } from "./store";

export const authStateSelector = (state: RootState) => state.auth;
export const appStateSelector = (state: RootState) => state.app;
export const blogsStateSelector = (state: RootState) => state.blogs;
export const postsOnBlogStateSelector = (state: RootState) => state.blogs.items;
export const postsStateSelector = (state: RootState) => state.posts;
