import React, { useEffect } from "react";
import "./App.scss";
import { Router } from "./components/Router";
import { Header } from "./components/Header/Header";
import { MainWrapper, PageWrapper } from "./ui/MainWrapper";
import { NavMenu } from "./components/NavMenu/NavMenu";
import { useAllSelector, useAppDispatch } from "./utils/hooks";
import { authStateSelector } from "./store/selectors";
import { useNavigate } from "react-router-dom";
import { RoutesEnum } from "./common/routes";
import { authAPI } from "./api";

function App() {
  const { accessToken, isLogged } = useAllSelector(authStateSelector);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    accessToken && authAPI.refreshToken();
    accessToken && authAPI.authMe(accessToken);
    authAPI.refreshToken();
    // isLogged && navigate("/" + RoutesEnum.BLOGS);
    // !isLogged && navigate("/" + RoutesEnum.LOGIN);
  }, [isLogged]);

  return (
    <PageWrapper>
      <Header />
      <MainWrapper>
        <NavMenu />
        <Router isLogged={isLogged} />
      </MainWrapper>
    </PageWrapper>
  );
}

export default App;
