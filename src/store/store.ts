import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import {rootReducer} from "./rootReducer";

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunk),
});

export type RootState = ReturnType<typeof rootReducer>;

// @ts-ignore
window.store = store;
