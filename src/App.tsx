import React from "react";
import "./App.scss";
import { AppRouter } from "./components/AppRouter";
import { Header } from "./components/Header";
import { MainWrapper, PageWrapper } from "./ui/MainWrapper";
import { NavMenu } from "./components/NavMenu/NavMenu";

function App() {
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
