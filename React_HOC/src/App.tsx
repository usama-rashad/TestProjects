import React from "react";
import "./App.css";
import ListComponent from "./components/ListComponent";

function App() {
	return (
		<div className="app">
			<h2>React HOC</h2>
      <ListComponent names={[]}/>
		</div>
	);
}

export default App;
