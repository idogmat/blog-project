import { Navigate, Route, Routes } from "react-router-dom";
import { RoutePaths, RoutesEnum } from "../common/routes";
import React from "react";

export const Router = (props: { isLogged: boolean }) => {
  return props.isLogged ? (
    <Routes>
      {RoutePaths.map(
        (route) =>
          route.isLogged && (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
            />
          )
      )}
      <Route path={"*"} element={<Navigate to={RoutesEnum.BLOGS} />} />
    </Routes>
  ) : (
    <Routes>
      {RoutePaths.map(
        (route) =>
          !route.isLogged && (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
            />
          )
      )}
      <Route path={"*"} element={<Navigate to={RoutesEnum.LOGIN} />} />
    </Routes>
  );
};
