import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = { mode: "idle" };

export const delayedMode = createAsyncThunk("delayedMode", (flag) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (flag) res();
      else {
        rej();
      }
    }, 2000);
  });
});

const modeSlice = createSlice({
  name: "mode",
  initialState: initialState,
  reducers: {
    updateMode(state, action) {
      state.mode = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(delayedMode.fulfilled, (state, action) => {
      state.mode = "Ready...";
    });
    builder.addCase(delayedMode.rejected, (state, action) => {
      state.mode = "Failed...";
    });
    builder.addCase(delayedMode.pending, (state, action) => {
      state.mode = "Waiting...";
    });
  },
});

export const ModeReducer = modeSlice.reducer;
export const { updateMode } = modeSlice.actions;
