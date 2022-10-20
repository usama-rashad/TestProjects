import { createSlice, configureStore, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

// Dummy promise
import { SamplePromise } from "../Redux/SamplePromise";

// Dummy object reducer
interface dummyObject {
  value: number;
  name: string;
  signature: {
    token: number;
    date: number;
  };
}

const initialState: dummyObject = {
  value: 0,
  name: "",
  signature: {
    token: 0,
    date: Date.now(),
  },
};

const dummyThunk = createAsyncThunk("create/dummyThunk", SamplePromise);

const dummySlice = createSlice({
  name: "dummy",
  initialState,
  reducers: {
    modify(state: dummyObject, action: PayloadAction<dummyObject>) {
      state.name = action.payload.name;
      state.value = action.payload.value;
      state.signature.date = action.payload.signature.date;
      state.signature.token = action.payload.signature.token;
    },
    updateName(state: dummyObject, action: PayloadAction<string>) {
      state.name = action.payload;
    },
  },
  extraReducers: {},
});

export const dummyReducer = dummySlice.reducer;
export const { modify, updateName } = dummySlice.actions;
