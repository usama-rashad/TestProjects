import { configureStore } from "@reduxjs/toolkit";
import { CalcReducer } from "./Components/Calc/calcReducer";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    calc: CalcReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type storeDispatch = typeof store.dispatch;
export const AppDispatch = useDispatch<storeDispatch>;
