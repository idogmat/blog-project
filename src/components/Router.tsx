import { Navigate, Route, Routes } from "react-router-dom";
import { isLoggedLinks, RoutePaths, RoutesEnum } from "../common/routes";
import React from "react";

export const Router = () => {
  return (
    <Routes>
      {RoutePaths.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<route.component />}
        />
      ))}
      <Route path={"*"} element={<Navigate to={RoutesEnum.NotFound} />} />
    </Routes>
  );
};
