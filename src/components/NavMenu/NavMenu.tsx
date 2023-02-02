import React from "react";
import { MenuLink } from "./Navigation";
import { Navigate } from "../../ui/Navigate";
import { RoutePaths } from "../../common/routes";

export const NavMenu = () => {
  return (
    <Navigate>
      {RoutePaths.map((page) => {
        return page.isLayout && <MenuLink key={page.path} page={page} />;
      })}
    </Navigate>
  );
};
