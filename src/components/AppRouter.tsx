import { Navigate, Route, Routes } from "react-router-dom";
import { RoutePaths, RoutesEnum } from "../common/routes";

export const AppRouter = () => {
  return (
    <Routes>
      <>
        {RoutePaths.map((route) => {
          return (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
            />
          );
        })}
        <Route path={"/*"} element={<Navigate to={RoutesEnum.BLOGS} />} />
      </>
    </Routes>
  );
};
