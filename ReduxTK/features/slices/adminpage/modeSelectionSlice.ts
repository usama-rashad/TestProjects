// Creat the slice which will store the current mode and allow changing of modes

import {createSlice} from "@reduxjs/toolkit";

enum EMode {
	Airline = "Airline",
	Aircraft = "Aircraft",
	Airport = "Airport",
	None = "None",
}

interface IMode {
	value: EMode;
}

const initialState: IMode = {value: EMode.None};

const adminMode = createSlice({
	name: "mode",
	initialState,
	reducers: {
		setAirline(state) {
			state.value = EMode.Airline;
		},
		setAircraft(state) {
			state.value = EMode.Aircraft;
		},
		setAirport(state) {
			state.value = EMode.Airport;
		},
	},
});

export const {setAircraft, setAirline, setAirport} = adminMode.actions;
export const adminModeReducer = adminMode.reducer;
