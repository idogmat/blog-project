import {RootState} from "../../store/store";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AnyAction} from "@reduxjs/toolkit";


export const useAppDispatch = useDispatch<AppDispatchType>;
export const useAllSelector: TypedUseSelectorHook<RootState> = useSelector;
export type AppDispatchType = ThunkDispatch<RootState, any, AnyAction>;

export type AppThunkActionType<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    AnyAction
>;

