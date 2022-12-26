import "./App.scss";
import axios from "axios";

import React, {useState} from "react";
import DataLoader from "./components/DataLoader";

// This application will load data from the API

function App() {
	return (
		<div className="app">
			<div className="intro">
				<span>Application</span>
			</div>
			<div className="controls">
				<DataLoader />
			</div>
		</div>
	);
}

export default App;
