import React, { useEffect } from "react";
import "./App.scss";
import { Router } from "../common/components/Router";
import { Header } from "../features/Header/Header";
import { MainWrapper, PageWrapper } from "../ui/MainWrapper";
import { NavMenu } from "../features/NavMenu/NavMenu";
import { useAllSelector, useAppDispatch } from "../utils/hooks";
import { authStateSelector } from "../store/selectors";

import { Preloader } from "../ui/Preloader";
import { initializeApp } from "./thunks/initializeApp";

function App(): JSX.Element {
  const { isInitialized, isAuth } = useAllSelector(authStateSelector);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(
      initializeApp({ accessToken: `${localStorage.getItem("accessToken")}` })
    );
  }, [isInitialized]);

  return (
    <PageWrapper>
      {isInitialized ? (
        <PageWrapper>
          <Header />
          <MainWrapper>
            <NavMenu />
            <Router isAuth={isAuth} />
          </MainWrapper>
        </PageWrapper>
      ) : (
        <Preloader />
      )}
    </PageWrapper>
  );
}

export default App;
