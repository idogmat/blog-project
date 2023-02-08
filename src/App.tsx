import React, { useEffect } from "react";
import "./App.scss";
import { AppRouter } from "./components/AppRouter";
import { Header } from "./components/Header";
import { MainWrapper, PageWrapper } from "./ui/MainWrapper";
import { NavMenu } from "./components/NavMenu/NavMenu";
import { useAllSelector } from "./utils/hooks";
import { authStateSelector } from "./store/selectors";
import { useNavigate } from "react-router-dom";
import { RoutesEnum } from "./common/routes";

function App() {
  const { accessToken, isLogged } = useAllSelector(authStateSelector);
  const navigate = useNavigate();
  useEffect(() => {
    // console.log(accessToken);
    // document.cookie = `refreshToken=${accessToken}`;
    // accessToken && authAPI.refreshToken(accessToken);

    isLogged && navigate("/" + RoutesEnum.BLOGS);
    !isLogged && navigate("/" + RoutesEnum.LOGIN);
  }, [accessToken, isLogged]);

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
