import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {fetchData} from "../../promises/fetchData";

interface IData {
	state: number;
	value: number;
	timeStamp: number;
}

const initialState: IData = {state: 0, value: 0, timeStamp: 0};

export const getDataAsyncThunk = createAsyncThunk("data", async () => {
	const res = await fetchData(false).then((res) => res);
	return res;
});

const fetchDataSlice = createSlice({
	name: "fetchData",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getDataAsyncThunk.pending, (state, action) => {
			state.value = 1;
		}),
			builder.addCase(getDataAsyncThunk.rejected, (state, action) => {
				state.value = 2;
			}),
			builder.addCase(getDataAsyncThunk.fulfilled, (state, action) => {
				state.value = 3;
			});
	},
});

export const fetchDataSliceReducer = fetchDataSlice.reducer;
