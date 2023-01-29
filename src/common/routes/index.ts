import {FC} from "react";

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
    POST = "/posts/:id"
}
//
// export const authRoutes: IRoute[] = [
//     {
//         path: RoutesEnum.BLOGS,
//         component: Profile,
//         isPage: true,
//     },
//     {
//         path: RoutesEnum.BLOG,
//         component: Packs,
//         isPage: true,
//     },
//     {
//         path: RoutesEnum.POSTS,
//         component: Cards,
//         isPage: false,
//     },
//     {
//         path: RoutesEnum.POST,
//         component: Learn,
//         isPage: false,
//     },
// ];
//
// export const unAuthRoutes: IRoute[] = [
//     {
//         path: RoutesEnum.LOGIN,
//         component: Login,
//         isPage: true,
//     },
//     {
//         path: RoutesEnum.REGISTER,
//         component: Register,
//         isPage: true,
//     },
// ];