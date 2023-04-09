import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { docReducer } from "./registerSlice";

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

export const store = configureStore({
  reducer: {
    addDoc: docReducer,
  },
  middleware: customizedMiddleware,
});

export type RootState = ReturnType<typeof store.getState>;
export type appDispatch = typeof store.dispatch;
