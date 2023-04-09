import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addNewDoc } from "./firebase";

interface IDocSlice {
  name: string;
  password: string;
}

const DocSliceInit: IDocSlice = { name: "", password: "" };

export const addDocThunk = createAsyncThunk("addDoc", async () => {
  return await addNewDoc("usama", "password" + new Date(Date.now()));
});

const docSlice = createSlice({
  name: "doc",
  initialState: DocSliceInit,
  reducers: {
    reset(state) {
      console.log("Reset...");
    },
  },
  extraReducers(builder) {
    builder.addCase(addDocThunk.pending, () => {
      console.log("Request pending...");
    });
    builder.addCase(addDocThunk.rejected, (state, actions) => {
      console.log("Request rejected...");
      console.log(actions);
    });
    builder.addCase(addDocThunk.fulfilled, (state, actions) => {
      console.log("Request fullfilled...");
      console.log(actions);
    });
  },
});

export const docReducer = docSlice.reducer;
export const { reset } = docSlice.actions;
