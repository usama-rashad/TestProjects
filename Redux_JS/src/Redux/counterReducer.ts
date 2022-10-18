import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";

// Counter reducers
interface CounterType {
  value: number;
}

const initialState: CounterType = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    add(state: CounterType, action: PayloadAction<number>) {
      state.value = state.value + action.payload;
    },
    sub(state: CounterType, action: PayloadAction<number>) {
      state.value = state.value - action.payload;
    },
  },
});

export const counterReducer = counterSlice.reducer;
export const { add, sub } = counterSlice.actions;
