import { configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { Store } from "redux";
import { add, counterReducer } from "./counterReducer";
import { modify, updateName, dummyReducer } from "./dummyReducer";

const store = configureStore({ reducer: { counterReducer, dummyReducer } });

export type appSelector = typeof 

export const dispatch =  store.dispatch;
export const counterState = store.getState().counterReducer.value;