import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import dummyPromise from "./dummyPromise";

interface IFilterSlice {
  counter: number;
}

const filterInitState: IFilterSlice = { counter: 0 };

export const sendAsync = createAsyncThunk("send", async (value: number) => {
  let command = dummyPromise(value);
  return command;
});

const filterSlice = createSlice({
  name: "filter",
  initialState: filterInitState,
  reducers: {
    increaseCounter(state, action) {
      state.counter++;
    },
    decreaseCounter(state, action) {
      state.counter--;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(sendAsync.pending, (state, action) => {
      console.log("Send pending...");
    }),
      builder.addCase(sendAsync.fulfilled, (state, action) => {
        console.log("Send complete. " + action.payload);
      }),
      builder.addCase(sendAsync.rejected, (state, action) => {
        console.log("Send failed.");
      });
  },
});

export const { decreaseCounter, increaseCounter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
