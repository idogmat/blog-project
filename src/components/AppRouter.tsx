import { Navigate, Route, Routes } from "react-router-dom";
import {authRoutes, RoutesEnum, unAuthRoutes} from "../common/routes";
import {useAllSelector} from "../utils/hooks";
import {authStateSelector} from "../store/selectors";



export const AppRouter = () => {
    const { isAuth } = useAllSelector(authStateSelector);

    return (
        <Routes>
            {isAuth ? (
                <>
                    {authRoutes.map((route) => {
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
            ) : (
                <>
                    {unAuthRoutes.map((route) => {
                        return (
                            <Route
                                key={route.path}
                                path={route.path}
                                element={<route.component />}
                            />
                        );
                    })}
                    <Route path={"/*"} element={<Navigate to={RoutesEnum.REGISTER} />} />
                </>
            )}
        </Routes>
    );
};
