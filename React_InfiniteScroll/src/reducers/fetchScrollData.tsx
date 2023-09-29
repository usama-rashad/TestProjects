import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { RootType } from "./../store";
import { IRawData, data } from "./../data";
import { useSelector } from "react-redux";

interface IFetchScroll {
  busy: boolean;
  isEnd: boolean;
  segmentStart: number;
  segmentEnd: number;
  segmentLength: number;
  segmentData: IRawData[];
}

interface IFetchScrollPayload {
  segmentLength: number;
}

interface IFetchSrollPromiseResponse {
  segmentStart: number;
  segmentEnd: number;
  dataSegment: IRawData[];
  isUpperLimitReached: boolean;
}

const initialValue: IFetchScroll = { busy: false, isEnd: false, segmentStart: 0, segmentEnd: 0, segmentLength: 80, segmentData: [] };

const getWindowLimits = (start: number, length: number) => {
  return { start: start, end: start + length, length: length };
};

const getCumulativeLimits = (currentLength: number, length: number, dataHighLimit: number) => {
  let newLength = currentLength + length;
  let limitReached = false;
  if (newLength > dataHighLimit) {
    newLength = dataHighLimit;
    limitReached = true;
  }
  return { start: 0, length: newLength, isEnd: limitReached };
};

// Thunk to fetch data from the JSON list. Make a dummy API with a delay
const fetchScrollSegmentThunk = createAsyncThunk<IFetchSrollPromiseResponse, IFetchScrollPayload, { state: RootType }>(
  "fetchScrollSegment",
  (options: IFetchScrollPayload, { getState }) => {
    return new Promise<IFetchSrollPromiseResponse>((res, rej) => {
      setTimeout(() => {
        let currentState = getState().fetchScroll;
        let sliceLimits = getCumulativeLimits(currentState.segmentEnd - currentState.segmentStart, options.segmentLength, 720);
        let dataSegment = data.slice(sliceLimits.start, sliceLimits.length);
        console.log(`Slice limits ${JSON.stringify(sliceLimits)}`);
        res({
          segmentStart: sliceLimits.start,
          segmentEnd: sliceLimits.start + sliceLimits.length,
          dataSegment: dataSegment,
          isUpperLimitReached: sliceLimits.isEnd,
        });
      }, 1000);
    });
  }
);

const fetchScrollSlice = createSlice({
  name: "scrollFetch",
  initialState: initialValue,
  reducers: {
    getNextSegmentData(state, action) {},
  },
  extraReducers(builder) {
    builder.addCase(fetchScrollSegmentThunk.pending, (state, action) => {
      state.busy = true;
    }),
      builder.addCase(fetchScrollSegmentThunk.fulfilled, (state, action) => {
        state.busy = false;
        console.log(action.payload);
        state.segmentData = action.payload.dataSegment;
        state.segmentStart = action.payload.segmentStart;
        state.segmentEnd = action.payload.segmentEnd;
        state.segmentLength = action.payload.segmentEnd - action.payload.segmentStart;
        state.isEnd = action.payload.isUpperLimitReached;
      }),
      builder.addCase(fetchScrollSegmentThunk.rejected, (state, action) => {
        state.segmentData = [];
        state.busy = false;
      });
  },
});

export const fetchScrollReducer = fetchScrollSlice.reducer;
export const { getNextSegmentData } = fetchScrollSlice.actions;
export { fetchScrollSegmentThunk };
