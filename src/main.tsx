import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import "./index.scss";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { HashRouter } from "react-router-dom";
import { createPortal } from "react-dom";
import { Modals } from "./modals";
const modals = createPortal(
  <Modals />,
  document.getElementById("portal") as HTMLElement
);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <HashRouter>
    <Provider store={store}>
      <App />
      {modals}
    </Provider>
  </HashRouter>
);
