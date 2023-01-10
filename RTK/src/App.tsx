import {useSelector, useDispatch} from "react-redux";
import "./App.css";
import React, {useReducer} from "react";
import {AppDispatch, RootState} from "./store/store";
import {
	increment,
	decrement,
	addAsync,
	requestData,
} from "./features/counterReducer";

function App() {
	const value = useSelector((state: RootState) => state.value);
	const data = useSelector((state: RootState) => state.data);
	const dispatcher = AppDispatch();
	const add = () => {
		dispatcher(increment());
	};
	const sub = () => {
		dispatcher(decrement());
	};
	const addDelayed = () => {
		dispatcher(addAsync());
	};
	const getData = () => {
		dispatcher(requestData());
		console.log("Data requested...");
	};

	return (
		<div className="app">
			<h1>Example to run Async AXIOS via a reducer dispatch</h1>
			<h3>{`Current counter value : ${JSON.stringify(value)}`}</h3>
			<button onClick={add}>Add</button>
			<button onClick={sub}>Sub</button>
			<button onClick={addDelayed}>Add Delayed</button>
			<button onClick={getData}>Get Data</button>
			<h3>{`Data : ${JSON.stringify(data)}`}</h3>
		</div>
	);
}

export default App;
