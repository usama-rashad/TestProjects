import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "./FilterReducer";
import { useDispatch } from "react-redux";

export const filterStore = configureStore({
  reducer: {
    filterReducer,
  },
});

export type RootState = ReturnType<typeof filterStore.getState>;
export type StoreDispatch = typeof filterStore.dispatch;
export const useFilterDispatch: () => StoreDispatch = useDispatch;
