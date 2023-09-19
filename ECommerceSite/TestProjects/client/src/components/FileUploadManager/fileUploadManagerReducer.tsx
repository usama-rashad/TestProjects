import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError, AxiosResponse } from "axios";

interface IFileUploadManagerStatus {
  status: "ready" | "uploading" | "error" | "paused";
  message: string;
}

interface IAxiosFileUploadResponse {
  message: string;
  error: string;
}

interface IFileUploadThunk {
  url: string;
  formData: FormData;
}

const initialStatus: IFileUploadManagerStatus = { status: "ready", message: "" };

export const uploadFileThunk = createAsyncThunk(
  "uploadFile",
  async ({ url, formData }: IFileUploadThunk, { rejectWithValue, fulfillWithValue }) => {
    try {
      let response = await axios.post(url, formData);
      return fulfillWithValue(response.data);
    } catch (axiosError) {
      if (axiosError instanceof AxiosError) {
        let { message, error } = axiosError.response?.data;
        return rejectWithValue({ message, error });
      }
    }
  }
);

const fileUploadManagerSlice = createSlice({
  name: "fileUploadManager",
  initialState: initialStatus,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(uploadFileThunk.pending, (state, action) => {
      state.status = "uploading";
    }),
      builder.addCase(uploadFileThunk.fulfilled, (state, action) => {
        let { message } = action.payload as IAxiosFileUploadResponse;
        state.message = message;
        state.status = "ready";
        // console.log(message);
      }),
      builder.addCase(uploadFileThunk.rejected, (state, action) => {
        let payload = action.payload as IAxiosFileUploadResponse;
        state.message = payload.error;
        state.status = "error";
        // console.log(payload);
      });
  },
});

export const fileUploadReducer = fileUploadManagerSlice.reducer;
