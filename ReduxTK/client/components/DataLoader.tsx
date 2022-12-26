import "./DataLoader.scss";
import axios from "axios";
import React, {useState} from "react";

function DataLoader() {
	const [airlineData, setAirlineData] = useState("");

	const loadData = () => {
		setAirlineData("");

		axios
			.get("http://127.0.0.1:3000/api/v1/")
			.then((res) => {
				console.log(res);
				setAirlineData(res.data);
			})
			.catch((err) => {
				console.log("Error while fetching GET :" + err);
				setAirlineData("Error while fetching data.");
			});
	};
	return (
		<div className="dataLoader">
			<button onClick={loadData}>Load</button>
			<span>{airlineData}</span>
		</div>
	);
}

export default DataLoader;
