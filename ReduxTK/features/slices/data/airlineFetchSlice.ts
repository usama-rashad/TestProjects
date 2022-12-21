// Thunk function to get airline data
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

// Airline data promise
import {airlineDataPromise} from "./../../promises/airlineDataPromise";

export interface IData {
	airlines: string[];
}

export const getDataThunk = createAsyncThunk("airlinesData", async () => {
	let data = await airlineDataPromise(true)
		.then((res) => {
			return res.airlines;
		})
		.catch((res) => {
			return res.airlines;
		});
	return data;
});

const initialState: IData = {airlines: []};
const airlineDataSlice = createSlice({
	name: "airlineSlice",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getDataThunk.pending, (state) => {
			console.log("Data  pending" + JSON.stringify(state));
		}),
			builder.addCase(getDataThunk.fulfilled, (state) => {
				console.log("Data fullfilled" + JSON.stringify(state));
			});
	},
});

export const airlineDataReducer = airlineDataSlice.reducer;
