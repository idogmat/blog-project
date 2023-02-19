import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../App'
import '../index.scss'
import {Provider} from "react-redux";
import {store} from "./store/store";
import {HashRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
<HashRouter>
    <Provider store={store}>
    <App />
  </Provider>
</HashRouter>
)
