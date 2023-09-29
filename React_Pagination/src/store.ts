import { configureStore } from "@reduxjs/toolkit";

import { fetchReducer } from "./Reducers/fetchData";
import { useDispatch } from "react-redux";

export const rootStore = configureStore({
  reducer: {
    getData: fetchReducer,
  },
});

export type RootType = typeof rootStore.getState;
export type RootState = ReturnType<typeof rootStore.getState>;
export const useAppDispatch = useDispatch<typeof rootStore.dispatch>;
