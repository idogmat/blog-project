import { RootState } from "./store";

export const authStateSelector = (state: RootState) => state.auth;
export const appStateSelector = (state: RootState) => state.app;
export const blogsStateSelector = (state: RootState) => state.blogs;
export const postsStateSelector = (state: RootState) => state.posts.items;
