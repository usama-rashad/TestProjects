import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError, AxiosResponse } from "axios";

type TFileUploadStates = "uploading" | "error" | "complete";

type TFileUploadStatus = {
  filename: string;
  uploadPct: number;
  state: TFileUploadStates;
};

interface IFileStatusCheckReducer {
  status: "ready" | "checking" | "error";
  fileStatus: TFileUploadStatus[];
}

interface IAxiosFileStatusCheckResponse {
  error: string;
  fileStatus: TFileUploadStatus[];
}

interface IFileStatusCheckThunk {
  url: string;
}

const initialStatus: IFileStatusCheckReducer = { status: "ready", fileStatus: [] };

export const fileStatusCheckThunk = createAsyncThunk(
  "checkFileStatus",
  async ({ url }: IFileStatusCheckThunk, { rejectWithValue, fulfillWithValue }) => {
    try {
      let response = await axios.get(url);
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
  name: "fileStatusCheck",
  initialState: initialStatus,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fileStatusCheckThunk.pending, (state, action) => {
      state.status = "checking";
    }),
      builder.addCase(fileStatusCheckThunk.fulfilled, (state, action) => {
        let { fileStatus } = action.payload as IAxiosFileStatusCheckResponse;
        state.status = "ready";
        state.fileStatus = fileStatus;
      }),
      builder.addCase(fileStatusCheckThunk.rejected, (state, action) => {
        let payload = action.payload as IAxiosFileStatusCheckResponse;
        state.status = "error";
        console.log(payload);
      });
  },
});

export const fileStatusCheckReducer = fileUploadManagerSlice.reducer;
