import { configureStore } from "@reduxjs/toolkit";
import { add, counterReducer } from "./counterReducer";
import { modify, updateName, dummyReducer } from "./dummyReducer";

const store = configureStore({ reducer: { counterReducer, dummyReducer } });

store.subscribe(() => {
  console.log("Action dispatched. New state is : " + store.getState().counterReducer.value);
});

// store.dispatch(add(2356));
// store.dispatch(modify({ value: 90, name: "ayesha", signature: { token: 69856789, date: Date.now() } }));
// store.dispatch(updateName("usama"))
