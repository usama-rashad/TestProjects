import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addNewDoc } from "./firebase";
import axios from "axios";

export interface IRegisterUser {
  username: string;
  password: string;
}

export interface IRegisterSlice {
  status: string;
  serverError: string;
}

const registerSliceInit: IRegisterSlice = { status: "", serverError: "" };

const registerThunk = createAsyncThunk("registerUser", async (userData: IRegisterUser, thunkAPI) => {
  try {
    let promise = await axios.post("http://localhost:5000/api/v1/createNewUser", userData);
  } catch (e) {
    thunkAPI.rejectWithValue(e);
  }
});

const registerSlice = createSlice({
  name: "registerSlice",
  initialState: registerSliceInit,
  reducers: {
    reset(state) {
      console.log("Reset...");
    },
  },
  extraReducers(builder) {
    builder.addCase(registerThunk.pending, (state, action) => {
      console.log("Request pending...");
    });
    builder.addCase(registerThunk.rejected, (state, actions) => {
      console.log("Message : " + JSON.stringify(actions.error));
    });

    builder.addCase(registerThunk.fulfilled, (state, actions) => {
      console.log("Builder OK");

      console.log(actions.payload);
    });
  },
});

export { registerThunk };
export const registerReducer = registerSlice.reducer;
export const { reset } = registerSlice.actions;
