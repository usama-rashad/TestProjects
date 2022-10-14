import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "../features/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

console.log(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
