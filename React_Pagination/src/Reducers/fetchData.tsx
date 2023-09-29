import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { rawData, IRawData } from "../rawData";

const rowsPerPage: number = 15;

interface IFetchReducer {
  busy: boolean;
  numberOfPages: number;
  completeData: IRawData[];
  selectedData: IRawData[];
  pages: IRawData[][];
}

const initialValue: IFetchReducer = { busy: false, numberOfPages: 0, completeData: [], selectedData: [], pages: [] };

const fetchDataAsyncThunk = createAsyncThunk("fetchDataThunk", (_, { rejectWithValue, fulfillWithValue }) => {
  return new Promise<IRawData[]>((res, rej) => {
    setTimeout(() => {
      res(rawData);
    }, 2000);
  });
});

const fetchSlice = createSlice({
  name: "fetchData",
  initialState: initialValue,
  reducers: {
    changePageNumber(state, action) {
      let rows = state.completeData;
      // Change the page number
      let pageNumber = action.payload;
      // Find page groups
      let numberOfPages = Math.ceil(rows.length / rowsPerPage);
      let pageContent = Array<IRawData[]>(numberOfPages);
      for (let pageNumber = 0; pageNumber < numberOfPages; pageNumber++) {
        pageContent[pageNumber] = rows.slice(pageNumber * rowsPerPage, pageNumber * rowsPerPage + rowsPerPage);
      }
      state.selectedData = pageContent[pageNumber];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDataAsyncThunk.pending, (state, action) => {
      state.busy = true;
      state.completeData = [];
    }),
      builder.addCase(fetchDataAsyncThunk.fulfilled, (state, action) => {
        let rows = action.payload;
        // Find page groups
        let numberOfPages = Math.ceil(rows.length / rowsPerPage);
        let pageContent = Array<IRawData[]>(numberOfPages);
        for (let pageNumber = 0; pageNumber < numberOfPages; pageNumber++) {
          pageContent[pageNumber] = rows.slice(pageNumber * rowsPerPage, pageNumber * rowsPerPage + rowsPerPage);
        }
        state.busy = false;
        state.completeData = action.payload;
        state.selectedData = pageContent[0];
        state.pages = pageContent;
      });
    builder.addCase(fetchDataAsyncThunk.rejected, (state, action) => {
      state.busy = false;
      state.completeData = [];
    });
  },
});

export const fetchReducer = fetchSlice.reducer;
export const { changePageNumber } = fetchSlice.actions;
export { fetchDataAsyncThunk };
