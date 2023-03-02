import { Navigate, Route, Routes } from "react-router-dom";
import { RoutePaths, RoutesEnum } from "../routes";
import React from "react";

export const Router = (props: { isAuth: boolean }) => {
  return props.isAuth ? (
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
