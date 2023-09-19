import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError, AxiosResponse } from "axios";

type TFileNameUploadStates = "uploading" | "error" | "complete" | "";

interface IFileNameUploadkReducer {
  status: "ready" | "checking" | "error";
}

interface IAxiosFileNameUploadResponse {
  error: string;
}

interface IFileNameUploadThunk {
  url: string;
  fileNames: string[];
}

const initialStatus: IFileNameUploadkReducer = { status: "ready" };

export const fileNameUploadhunk = createAsyncThunk(
  "updateFilenameStatus",
  async ({ url, fileNames }: IFileNameUploadThunk, { rejectWithValue, fulfillWithValue }) => {
    try {
      let response = await axios.post(url, { type: "multiple", fileNames: fileNames });
      return fulfillWithValue(response.data);
    } catch (axiosError) {
      if (axiosError instanceof AxiosError) {
        let { message, error } = axiosError.response?.data;
        return rejectWithValue({ message, error });
      }
    }
  }
);

const fileNameUpdateSlice = createSlice({
  name: "fileStatusCheck",
  initialState: initialStatus,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fileNameUploadhunk.pending, (state, action) => {
      state.status = "checking";
    }),
      builder.addCase(fileNameUploadhunk.fulfilled, (state, action) => {
        let { error } = action.payload as IAxiosFileNameUploadResponse;
        state.status = "ready";
      }),
      builder.addCase(fileNameUploadhunk.rejected, (state, action) => {
        let payload = action.payload as IAxiosFileNameUploadResponse;
        state.status = "error";
      });
  },
});

export const fileNameUpdateReducer = fileNameUpdateSlice.reducer;
