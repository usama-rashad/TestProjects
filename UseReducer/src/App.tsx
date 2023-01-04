import React, {useReducer} from "react";
import "./App.scss";
import {
	CounterActions,
	CounterInitialState,
	CounterReducer,
} from "./reducers/counterReducer";

function App() {
	const [state, dispatch] = useReducer(CounterReducer, CounterInitialState);
	return (
		<div className="app">
			<h2>{state.value}</h2>
			<div
				className="add"
				onClick={() => {
					dispatch({action: CounterActions.Add});
				}}
			/>
			<div
				className="sub"
				onClick={() => {
					dispatch({action: CounterActions.Subtract});
				}}
			/>
		</div>
	);
}

export default App;
