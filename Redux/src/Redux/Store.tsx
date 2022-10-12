import { configureStore } from "@reduxjs/toolkit";

// Reducer imports
import CounterReducer from "./Reducers/CounterReducer";

const store = configureStore({
  reducer: {},
});

export default store;
