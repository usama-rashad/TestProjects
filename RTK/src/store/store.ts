import {configureStore, combineReducers} from "@reduxjs/toolkit";
import {counterReducer} from "../features/counterReducer";
import {useDispatch} from "react-redux";

const rootReducer = combineReducers([counterReducer]);

export const store = configureStore({
	reducer: counterReducer,
});

export type RootState = ReturnType<typeof store.getState>;
type storeDispatch = typeof store.dispatch;
export const AppDispatch = useDispatch<storeDispatch>;
