import "./AirlineDataAdder.scss";

import React, {useState} from "react";
import axios, {AxiosError} from "axios";

function AirlineDataAdder() {
	const [name, setAirlineName] = useState("");
	const [hub, setAirlineHub] = useState("");
	const [iconURL, setIconURL] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	const addAirline = () => {
		axios
			.post("http://127.0.0.1:3000/api/v1/airline/add", {
				airlineName: name,
				airlineHub: hub,
			})
			.then(() => {
				console.log("Data sent successfully");
			})
			.catch((err: AxiosError) => {
				console.log("Data send failed. Err " + JSON.stringify(err));
			});
	};

	return (
		<div className="airlineDataAdder">
			<h2>Add further airlines here</h2>
			<div className="inputs">
				<input
					placeholder="Airline name"
					onChange={(e) => {
						setAirlineName(e.target.value);
					}}
					value={name}
				/>
				<input
					placeholder="Airline hub"
					onChange={(e) => {
						setAirlineHub(e.target.value);
					}}
					value={hub}
				/>
			</div>
			<button onClick={addAirline}>Add Airline</button>
			<span className="errorMessage">{errorMessage}</span>
		</div>
	);
}

export default AirlineDataAdder;
