import React from "react";
import { MenuLink } from "./Navigation";
import { authRoutes, getRouteName, unAuthRoutes } from "../../common/routes";
import { useAllSelector } from "../../utils/hooks";
import { authStateSelector } from "../../store/selectors";
import { Navigate } from "../../ui/Navigate";

export const NavMenu = () => {
  const { isAuth } = useAllSelector(authStateSelector);
  const unAuthPages = getRouteName(unAuthRoutes);
  const authPages = getRouteName(authRoutes);
  return (
    <Navigate>
      {isAuth
        ? authPages.map((page) => {
            return <MenuLink key={page} page={page} />;
          })
        : unAuthPages.map((page) => {
            return <MenuLink key={page} page={page} />;
          })}
    </Navigate>
  );
};
