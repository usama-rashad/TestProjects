import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import { operationsReducer } from "./Reducers/operationsReducer";

// Create a root store
const rootStore = configureStore({
  reducer: {
    operations: operationsReducer,
  },
});

export default rootStore;
export type RootStoreState = ReturnType<typeof rootStore.getState>;
export type RootStoreDispatch = typeof rootStore.dispatch;

export const myStoreDispatcher = rootStore.dispatch;
