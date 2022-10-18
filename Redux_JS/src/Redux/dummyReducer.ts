import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";

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

const dummySlice = createSlice({
  name: "dummy",
  initialState,
  reducers: {
    modify(state: dummyObject, action: PayloadAction<dummyObject>) {
      state = action.payload;
    },
  },
});

export const dummyReducer = dummySlice.reducer;
export const { modify } = dummySlice.actions;
