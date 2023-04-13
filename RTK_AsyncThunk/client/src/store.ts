import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { registerReducer } from "./registerSlice";

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

export const store = configureStore({
  reducer: {
    register: registerReducer,
  },
  middleware: customizedMiddleware,
});

export type RootState = ReturnType<typeof store.getState>;
export type appDispatch = typeof store.dispatch;
