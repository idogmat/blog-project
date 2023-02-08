import React from "react";
import { MenuLink } from "./Navigation";
import { Navigate } from "../../ui/Navigate";
import { filterLinks, RoutePaths } from "../../common/routes";
import { useAllSelector } from "../../utils/hooks";
import { authStateSelector } from "../../store/selectors";

export const NavMenu = () => {
  const { isLogged } = useAllSelector(authStateSelector);
  return (
    <>
      {isLogged && (
        <Navigate>
          {filterLinks.map((page) => {
            return <MenuLink key={page.path} page={page} />;
          })}
        </Navigate>
      )}
    </>
  );
};
