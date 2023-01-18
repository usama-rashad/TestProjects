import React from "react";
import "./App.scss";
import HOC from "./utils/HOC";
import InputComponent from "./utils/InputComponent";
import Counter from "./utils/Counter";

function App() {
	return (
		<div className="App">
			<Counter />
			<Counter />
		</div>
	);
}

export default App;
