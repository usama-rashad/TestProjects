import { configureStore } from "@reduxjs/toolkit";
import { Store } from "redux";
import { add, counterReducer } from "./counterReducer";
import { modify, updateName, dummyReducer } from "./dummyReducer";

const store = configureStore({ reducer: { counterReducer, dummyReducer } });

export const storeDispatch = store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const counterReducerState = (state: RootState) => state.counterReducer;
export const dummyReducerState = (state: RootState) => state.dummyReducer;

store.subscribe(() => {
  console.log("Action dispatched. New state is : " + store.getState().counterReducer.value);
});

storeDispatch(add(99));
// store.dispatch(add(2356));
// store.dispatch(modify({ value: 90, name: "ayesha", signature: { token: 69856789, date: Date.now() } }));
// store.dispatch(updateName("usama"))
