import { FC } from "react";
import { Blogs } from "../../features/Blogs/Blogs";
import { Login } from "../../features/Login/Login";
import { Posts } from "../../features/Posts/Posts";
import { LayoutCurrenPost } from "../../features/Posts/LayoutCurrenPost";
import { LayoutCurrenBlog } from "../../features/Blogs/LayoutCurrenBlog";
import { NotFound } from "../components/NotFound";
import { Registration } from "../../features/Registration/Registration";
import { ConfirmEmail } from "../../features/ConfirmEmail/ConfirmEmail";
import { ForgotPassword } from "../../features/ForgotPassword/ForgotPassword";
import { RecoveryForm } from "../../features/ForgotPassword/RecoveryForm";
import { CreateNewPassword } from "../../features/ForgotPassword/CreateNewPassword";
import { SetNewPassword } from "../../features/ForgotPassword/SetNewPassword";

export interface IRoute {
  path: string;
  component: FC | any;
  isLayout: boolean;
  isLogged: boolean;
}
export enum RoutesEnum {
  LOGIN = "login",
  REGISTER = "/register",
  FORGOT_PASSWORD = "/recovery",
  NEW_PASSWORD = "/recovery/*",
  CONFIRM_EMAIL = "/confirmEmail/*",
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
    path: RoutesEnum.REGISTER,
    component: Registration,
    isLayout: false,
    isLogged: false,
  },
  {
    path: RoutesEnum.CONFIRM_EMAIL,
    component: ConfirmEmail,
    isLayout: false,
    isLogged: false,
  },
  {
    path: RoutesEnum.FORGOT_PASSWORD,
    component: RecoveryForm,
    isLayout: false,
    isLogged: false,
  },
  {
    path: RoutesEnum.NEW_PASSWORD,
    component: SetNewPassword,
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
