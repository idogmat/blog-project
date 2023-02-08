import { FC } from "react";
import { Blogs } from "../../components/Blogs/Blogs";
import { Login } from "../../components/Login";
import { Posts } from "../../components/Posts/Posts";
import { LayoutCurrenPost } from "../../components/Posts/LayoutCurrenPost";
import { LayoutCurrenBlog } from "../../components/Blogs/LayoutCurrenBlog";
import { NotFound } from "../components/NotFound";

export interface IRoute {
  path: string;
  component: FC | any;
  isLayout: boolean;
  isLogged: boolean;
}
export enum RoutesEnum {
  LOGIN = "login",
  REGISTER = "/register",
  BLOGS = "blogs",
  BLOG = "blogs/:id",
  POSTS = "posts",
  POST = "posts/:id",
  NotFound = "404",
}

export const RoutePaths: IRoute[] = [
  {
    path: RoutesEnum.LOGIN,
    component: Login,
    isLayout: false,
    isLogged: false,
  },
  {
    path: RoutesEnum.BLOGS,
    component: Blogs,
    isLayout: true,
    isLogged: true,
  },
  {
    path: RoutesEnum.POSTS,
    component: Posts,
    isLayout: true,
    isLogged: true,
  },
  {
    path: RoutesEnum.BLOG,
    component: LayoutCurrenBlog,
    isLayout: false,
    isLogged: true,
  },
  {
    path: RoutesEnum.POST,
    component: LayoutCurrenPost,
    isLayout: false,
    isLogged: true,
  },
  {
    path: RoutesEnum.NotFound,
    component: NotFound,
    isLayout: false,
    isLogged: true,
  },
];
export const filterLinks = RoutePaths.filter((e) => e.isLayout);
export const isLoggedLinks = RoutePaths.filter((r) => r.isLogged);
