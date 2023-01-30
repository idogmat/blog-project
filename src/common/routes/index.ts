import { FC } from "react";
import { Blogs } from "../../components/Blogs/Blogs";
import { Login } from "../../components/Login";
import { Posts } from "../../components/Posts/Posts";

export interface IRoute {
  path: string;
  component: FC;
  isPage: boolean;
}
export enum RoutesEnum {
  LOGIN = "/login",
  REGISTER = "/register",
  BLOGS = "/blogs",
  BLOG = "/blogs/:id",
  POSTS = "/posts",
  POST = "/posts/:id",
}

export const authRoutes: IRoute[] = [
  {
    path: RoutesEnum.BLOGS,
    component: Blogs,
    isPage: false,
  },
  // {
  //     path: RoutesEnum.BLOG,
  //     component: Packs,
  //     isPage: true,
  // },
  // {
  //     path: RoutesEnum.POSTS,
  //     component: Cards,
  //     isPage: false,
  // },
  // {
  //     path: RoutesEnum.POST,
  //     component: Learn,
  //     isPage: false,
  // },
];

export const unAuthRoutes: IRoute[] = [
  {
    path: RoutesEnum.LOGIN,
    component: Login,
    isPage: true,
  },
  {
    path: RoutesEnum.BLOGS,
    component: Blogs,
    isPage: true,
  },
  {
    path: RoutesEnum.POSTS,
    component: Posts,
    isPage: true,
  },
  // {
  //     path: RoutesEnum.REGISTER,
  //     component: Register,
  //     isPage: true,
  // },
];
export const getRouteName = (routes: IRoute[]) => {
  return routes
    .filter((route) => route.isPage)
    .map((route) => route.path.slice(1));
};
