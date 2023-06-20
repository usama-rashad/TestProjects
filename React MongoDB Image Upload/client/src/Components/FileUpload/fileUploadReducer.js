import { createSlice } from "@reduxjs/toolkit";

const initialState = { busy: false, progressPct: 0 };

const fileUploadSlice = createSlice({
  name: "upload",
  initialState: initialState,
  reducers: {
    updateBusy(state, action) {
      state.busy = action.status;
    },
    updateProgress(state, action) {
      state.progressPct = action.progress;
    },
  },
});

export default fileUploadReducer = fileUploadSlice.reducer;
export const { updateBusy, updateProgress } = fileUploadSlice.actions;
