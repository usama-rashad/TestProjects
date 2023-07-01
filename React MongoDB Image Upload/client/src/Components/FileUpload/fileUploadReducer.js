import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = { progressPct: 0, busy: false };

const uploadSlice = createSlice({
  name: "upload",
  initialState: initialState,
  reducers: {
    updateProgress(state, action) {
      let progress = action.payload;
      state.busy = progress !== 100;
      state.progressPct = action.payload;
    },
  },
});

export const UploadReducer = uploadSlice.reducer;
export const { updateProgress } = uploadSlice.actions;
