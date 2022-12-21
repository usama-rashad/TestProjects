import "./App.scss";
import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux/es/exports";
import {getDataThunk} from "./features/slices/data/airlineFetchSlice";

import {store} from "./features/reducers/store";
import {
	setAircraft,
	setAirline,
	setAirport,
} from "./features/slices/adminpage/modeSelectionSlice";

function App() {
	const currentMode = useSelector(store.getState);
	const dispatch = useDispatch();

	const setAirportMode = () => {
		dispatch(setAirport());
	};
	const setAirlineMode = () => {
		dispatch(setAirline());
	};
	const setAircraftMode = () => {
		dispatch(setAircraft());
	};

	const fetchDataButtonAction = () => {
		console.log("Fetch airline data button pressed");
		dispatch(getDataThunk.);
	};

	return (
		<div className="app">
			<button onClick={setAirportMode}>Select Airport</button>
			<button onClick={setAirlineMode}>Select Airline</button>
			<button onClick={setAircraftMode}>Select Aircraft</button>
			<span>{currentMode.adminModeReducer.value}</span>

			<button onClick={fetchDataButtonAction}>Fetch Data</button>
			<span>{JSON.stringify(currentMode.airlineDataReducer.airlines)}</span>
		</div>
	);
}

export default App;
