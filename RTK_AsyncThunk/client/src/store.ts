import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { pokemonReducer } from "./registerSlice";

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
  },
  middleware: customizedMiddleware,
});

export type RootState = ReturnType<typeof store.getState>;
export type appDispatch = typeof store.dispatch;
