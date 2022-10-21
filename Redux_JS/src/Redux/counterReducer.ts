import { createSlice, configureStore, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

import { SamplePromise } from "../Redux/SamplePromise";

// Counter reducers
interface CounterType {
  value: number;
}

const initialState: CounterType = {
  value: 0,
};

export const asyncAdd = createAsyncThunk("addDelayed", async () => {
  let a = await SamplePromise(true).then().catch();
  return a;
});

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    add(state: CounterType, action: PayloadAction<number>) {
      console.log("Add called");
      state.value = state.value + action.payload;
    },
    sub(state: CounterType, action: PayloadAction<number>) {
      state.value = state.value - action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(asyncAdd.fulfilled, (state, action) => {
      console.log("Async fullfilled. Payload is :" + JSON.stringify(action));
      state.value += <number>action.payload;
    });
    builder.addCase(asyncAdd.rejected, (state, action) => {
      console.log("Async rejected. Payload is :" + JSON.stringify(action));

      state.value += <number>action.payload;
    });
  },
});

export const counterReducer = counterSlice.reducer;
export const { add, sub } = counterSlice.actions;
