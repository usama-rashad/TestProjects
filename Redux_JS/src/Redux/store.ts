import { configureStore } from "@reduxjs/toolkit";
import { add, counterReducer } from "./counterReducer";
import { modify, dummyReducer } from "./dummyReducer";

const store = configureStore({ reducer: { counterReducer, dummyReducer } });

store.dispatch(add(2356));
store.dispatch(modify({ value: 90, name: "usama", signature: { token: 69856789, date: Date.now() } }));

console.log(store.getState());
