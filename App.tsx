import React, { useEffect } from "react";
import "./App.scss";
import { AppRouter } from "./src/components/AppRouter";
import { Header } from "./src/components/Header";
import { MainWrapper, PageWrapper } from "./src/ui/MainWrapper";
import { NavMenu } from "./src/components/NavMenu/NavMenu";
import { useAllSelector } from "./src/utils/hooks";
import { authStateSelector } from "./src/store/selectors";
import { useNavigate } from "react-router-dom";
import { RoutesEnum } from "./src/common/routes";
import { authAPI } from "./src/api";

function App() {
  const { accessToken, isLogged } = useAllSelector(authStateSelector);
  const navigate = useNavigate();
  useEffect(() => {
    // console.log(accessToken);
    // document.cookie = `refreshToken=${accessToken}`;
    setTimeout(() => {
      console.log(authAPI.refreshToken());
    }, 1000);

    // accessToken && authAPI.refreshToken(accessToken);
    isLogged && navigate("/" + RoutesEnum.BLOGS);
    !isLogged && navigate("/" + RoutesEnum.LOGIN);
  }, [isLogged]);

  return (
    <PageWrapper>
      <Header />
      <MainWrapper>
        <NavMenu />
        <AppRouter />
      </MainWrapper>
    </PageWrapper>
  );
}

export default App;
