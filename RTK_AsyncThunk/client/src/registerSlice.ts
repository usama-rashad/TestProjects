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

const registerThunk = createAsyncThunk("registerUser", async (userData: IRegisterUser) => {
  let p = await new Promise<string>(async (resolve, reject) => {
    await axios
      .post("http://localhost:5000/api/v1/createNewUser", userData)
      .then((response) => {
        console.log(response);
        resolve(response.data);
      })
      .catch((error) => {
        console.log(error.response.data.message.code);
        reject(error.message);
      });
  });
  return p;
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
    builder.addCase(registerThunk.rejected, (state, actions) => {});
    builder.addCase(registerThunk.fulfilled, (state, actions) => {
      console.log(actions);
    });
  },
});

export { registerThunk };
export const registerReducer = registerSlice.reducer;
export const { reset } = registerSlice.actions;
