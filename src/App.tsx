import React, { useEffect } from "react";
import "./App.scss";
import { Router } from "./common/components/Router";
import { Header } from "./features/Header/Header";
import { MainWrapper, PageWrapper } from "./ui/MainWrapper";
import { NavMenu } from "./features/NavMenu/NavMenu";
import { useAllSelector, useAppDispatch } from "./utils/hooks";
import { authStateSelector } from "./store/selectors";
import { authMe } from "./store/thunks/authThunk";
import { Preloader } from "./ui/Preloader";

function App(): JSX.Element {
  const { isInitialized, isAuth } = useAllSelector(authStateSelector);
  const dispatch = useAppDispatch();
  // const navigate = useNavigate();
  // useEffect(() => {
  //   // accessToken && authAPI.refreshToken();
  //   // accessToken && authAPI.authMe();
  //   authAPI.checkAuth();
  //   localStorage.getItem("accessToken");
  //   // isLogged && navigate("/" + RoutesEnum.BLOGS);
  //   // !isLogged && navigate("/" + RoutesEnum.LOGIN);
  // }, [isLogged]);
  useEffect(() => {
    console.log(isAuth);
    dispatch(authMe({ accessToken: `${localStorage.getItem("accessToken")}` }));
    // authAPI.refreshToken();
    // isLogged && navigate("/" + RoutesEnum.BLOGS);
    // !isLogged && navigate("/" + RoutesEnum.LOGIN);
  }, [isInitialized]);

  return (
    <PageWrapper>
      <Header />
      {isInitialized ? (
        <MainWrapper>
          <NavMenu />
          <Router isAuth={isAuth} />
        </MainWrapper>
      ) : (
        <Preloader />
      )}
    </PageWrapper>
  );
}

export default App;
