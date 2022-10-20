import { configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { Store } from "redux";
import { add, counterReducer } from "./counterReducer";
import { modify, updateName, dummyReducer } from "./dummyReducer";

export const store = configureStore({ reducer: { counterReducer, dummyReducer } });

export const storeDispatch = store.dispatch;
