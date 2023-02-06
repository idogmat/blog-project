import React, { useEffect } from "react";
import "./App.scss";
import { AppRouter } from "./components/AppRouter";
import { Header } from "./components/Header";
import { MainWrapper, PageWrapper } from "./ui/MainWrapper";
import { NavMenu } from "./components/NavMenu/NavMenu";
import { useAllSelector } from "./utils/hooks";
import { authStateSelector } from "./store/selectors";
import { authAPI } from "./api";

function App() {
  const { accessToken } = useAllSelector(authStateSelector);
  useEffect(() => {
    document.cookie = `refreshToken=${accessToken}`;
    accessToken && authAPI.refreshToken(accessToken);
  }, [accessToken]);
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
