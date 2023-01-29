import {combineReducers} from "@reduxjs/toolkit";
import {authReducer} from "./authSlice";

export const reducers = {
    auth: authReducer,

};

export const rootReducer = combineReducers(reducers);