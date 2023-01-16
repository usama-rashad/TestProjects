import React from "react";
import "./App.scss";
import LabelWithEdit from "./components/LabelWithEdit";

function App() {
	return (
		<div className="App">
			<h2>React HOC</h2>
			<h4>This example demonstrates how to use HOCs to create a simple lable item which can be edited in place</h4>
			<div className="grid">
				<LabelWithEdit />
				<LabelWithEdit />
				<LabelWithEdit />
				<LabelWithEdit />
				<LabelWithEdit />
				<LabelWithEdit />
			</div>
		</div>
	);
}

export default App;
