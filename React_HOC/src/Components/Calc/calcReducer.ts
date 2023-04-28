import { createSlice } from "@reduxjs/toolkit";

interface ICalc {
  isBusy: boolean;
}

const calcInitialState: ICalc = { isBusy: false };

const calcReducer = createSlice({
  name: "Calc",
  initialState: calcInitialState,
  reducers: {
    setIdle(state) {
      state.isBusy = false;
    },
    setBusy(state) {
      state.isBusy = true;
    },
  },
});

export const CalcReducer = calcReducer.reducer;
export const { setBusy, setIdle } = calcReducer.actions;
