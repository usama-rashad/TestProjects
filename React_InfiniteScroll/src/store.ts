import { configureStore } from "@reduxjs/toolkit";
import { fetchScrollReducer } from "./reducers/fetchScrollData";
import { useDispatch } from "react-redux";

export const rootStore = configureStore({
  reducer: {
    fetchScroll: fetchScrollReducer,
  },
});

export type RootType = ReturnType<typeof rootStore.getState>;
export type DispatchType = typeof rootStore.dispatch;
export const useAppDispatch = useDispatch<DispatchType>;
