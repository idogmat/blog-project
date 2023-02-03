import React from "react";
import { MenuLink } from "./Navigation";
import { Navigate } from "../../ui/Navigate";
import { filterLinks, RoutePaths } from "../../common/routes";

export const NavMenu = () => {
  return (
    <Navigate>
      {filterLinks.map((page) => {
        return <MenuLink key={page.path} page={page} />;
      })}
    </Navigate>
  );
};
