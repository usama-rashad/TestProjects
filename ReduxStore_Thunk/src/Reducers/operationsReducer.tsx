import { createAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { TypedUseSelectorHook } from "react-redux";
import axios from "axios";

interface IOpReducerState {
  count: number;
}

const operationsInitialState: IOpReducerState = { count: 55 };

const testAsyncThunk = createAsyncThunk("test", async (input) => {
  let response = await axios.get("http://localhost:4020/api/books/testBook");
  return await response.data;
});

const operationsSlice = createSlice({
  name: "operations",
  initialState: operationsInitialState,
  reducers: {
    add(state, action) {
      state.count++;
      console.log(action.payload);
    },
    subtract(state, action) {
      state.count--;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(testAsyncThunk.pending, (state, action) => {}),
      builder.addCase(testAsyncThunk.fulfilled, (state, action) => {
        console.log("Fullfilled.");
      }),
      builder.addCase(testAsyncThunk.rejected, (state, action) => {});
  },
});

export const myAddAction = createAction("operations/add", (value) => {
  return {
    payload: { value: value },
  };
});

export const operationsReducer = operationsSlice.reducer;
export const { add, subtract } = operationsSlice.actions;
export { testAsyncThunk };
