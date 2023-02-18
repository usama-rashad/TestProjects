import {createSlice} from "@reduxjs/toolkit";

type counterState = {
	value: number;
};

const initialValue: counterState = {value: 1};

const counterSlice = createSlice({
	name: "counter",
	initialState: initialValue,
	reducers: {
		increment: state => {
			state.value += 1;
		},
		decrement: state => {
			state.value -= 1;
		},
		reset: state => {
			state.value = 0;
		},
	},
});

export const {increment, decrement, reset} = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
