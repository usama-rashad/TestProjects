import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFilterParameter } from "./Filter";
import axios from "axios";

const initState: IFilterParameter[] = [];
let reuqestCount: number = 0;

export const applySettings = createAsyncThunk("filter/applySettings", async (data: IFilterParameter[]) => {
  reuqestCount++;
  const response = await axios.post("http://192.168.100.8:9000/filter/ApplySettings", { requestCount: reuqestCount, data: data });
  return response.data;
});

const FilterReducer = createSlice({
  name: "filterSlice",
  initialState: initState,
  reducers: {
    updateStringOption(state, action: PayloadAction<IFilterParameter>) {
      // Check previous entry and update. Add new entry if it does'nt exist previously
      let found = state.find((entry) => entry.parameterName === action.payload.parameterName);
      if (found) {
        found.options = action.payload.options;
      } else {
        state.push(action.payload);
      }
    },
    updateSingleOption(state, action: PayloadAction<IFilterParameter>) {
      // Check previous entry and update. Add new entry if it does'nt exist previously
      let found = state.find((entry) => entry.parameterName === action.payload.parameterName);
      if (found) {
        found.options = action.payload.options;
      } else {
        state.push(action.payload);
      }
    },
    updateMenuOption(state, action: PayloadAction<IFilterParameter>) {
      // Check previous entry and update. Add new entry if it does'nt exist previously
      let found = state.find((entry) => entry.parameterName === action.payload.parameterName);
      if (found) {
        found.options = action.payload.options;
      } else {
        state.push(action.payload);
      }
    },
    updateMultipleOption(state, action: PayloadAction<IFilterParameter>) {
      // Check previous entry and update. Add new entry if it does'nt exist previously
      let found = state.find((entry) => entry.parameterName === action.payload.parameterName);
      if (found) {
        found.options = action.payload.options;
      } else {
        state.push(action.payload);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(applySettings.pending, (state, action) => {});
    builder.addCase(applySettings.fulfilled, (state, action) => {});
    builder.addCase(applySettings.rejected, (state, action) => {});
  },
});

export const filterReducer = FilterReducer.reducer;
export const { updateStringOption, updateSingleOption, updateMenuOption, updateMultipleOption } = FilterReducer.actions;
