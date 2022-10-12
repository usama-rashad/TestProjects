import { createSlice } from "@reduxjs/toolkit";
import CounterReducer from "../Reducers/CounterReducer";

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    CounterReducer,
  },
});
