import { FC } from "react";
import { Blogs } from "../../components/Blogs/Blogs";
import { Login } from "../../components/Login";
import { Posts } from "../../components/Posts/Posts";
import { LayoutCurrenPost } from "../../components/Posts/LayoutCurrenPost";

export interface IRoute {
  path: string;
  component: FC;
  isLayout: boolean;
}
export enum RoutesEnum {
  LOGIN = "login",
  REGISTER = "/register",
  BLOGS = "blogs",
  BLOG = "blogs/:id",
  POSTS = "posts",
  POST = "posts/:id",
}

export const RoutePaths: IRoute[] = [
  {
    path: RoutesEnum.BLOGS,
    component: Blogs,
    isLayout: true,
  },
  {
    path: RoutesEnum.POSTS,
    component: Posts,
    isLayout: true,
  },
  {
    path: RoutesEnum.LOGIN,
    component: Login,
    isLayout: false,
  },

  {
    path: RoutesEnum.BLOG,
    component: Blogs,
    isLayout: false,
  },
  {
    path: RoutesEnum.POST,
    component: LayoutCurrenPost,
    isLayout: false,
  },
];
export const filterLinks = RoutePaths.filter((e) => e.isLayout);
