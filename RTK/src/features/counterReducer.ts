import {PayloadAction, createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {number} from "prop-types";
import axios from "axios";

interface ICounterState {
	value: number;
	data: string;
	isLoading: boolean;
	isLoaded: boolean;
}

const initialState: ICounterState = {
	value: 0,
	isLoading: false,
	isLoaded: false,
	data: "No data",
};

export const addAsync = createAsyncThunk("add", async () => {
	let p = new Promise<string>((res, rej) => {
		setTimeout(() => {
			if (true) res("OK");
			else rej("NOK");
		}, 1000);
	});
	return p;
});

export const requestData = createAsyncThunk("getData", async () => {
	let data = await axios<string>({
		url: "http://localhost:5050/",
		method: "GET",
	});
	return data.data;
});

const counterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		increment(state) {
			state.value = state.value + 1;
			state.data = "";
		},
		decrement(state) {
			state.value = state.value - 1;
			state.data = "";
		},
		incrementByValue(state, action: PayloadAction<number>) {
			state.value = state.value + action.payload;
			state.data = "";
		},
	},
	extraReducers: (builder) => {
		builder.addCase(addAsync.fulfilled, (state, action) => {
			state.value = state.value + 1;
			console.log("Payload : " + action.payload);
		}),
			builder.addCase(addAsync.rejected, (state) => {
				state.value = 100;
			}),
			builder.addCase(requestData.pending, (state) => {
				state.isLoading = true;
				state.isLoaded = false;
				state.data = "Waiting for data...";
				console.log("Requesting for data...");
			}),
			builder.addCase(requestData.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isLoaded = true;
				state.data = action.payload;
				console.log("Data received : " + action.payload);
			}),
			builder.addCase(requestData.rejected, (state) => {
				state.isLoading = false;
				state.isLoaded = false;
				state.data = "Failed";
				console.log("Data recieve failed.");
			});
	},
});

// Export reducers and actions
export const counterReducer = counterSlice.reducer;
export const {decrement, increment, incrementByValue} = counterSlice.actions;
