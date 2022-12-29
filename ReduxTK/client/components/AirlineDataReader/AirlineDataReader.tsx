import "./AirlineDataReader.scss";

import React, {useState} from "react";
import axios from "axios";

interface IAirlineData {
	id: number;
	name: string;
}

function AirlineDataReader() {
	const [airlineData, setAirlineData] = useState<IAirlineData[]>();

	const fetchNames = () => {
		axios.get("http://127.0.0.1:3000/api/v1/airline/getAll").then((data) => {
			setAirlineData([]);
			console.log(data.data);
			setAirlineData(data.data);
		});
	};

	return (
		<div className="airlineReader">
			<div className="controls">
				<button onClick={fetchNames}>Get names</button>
			</div>
			<div className="display">
				{airlineData?.map((single) => (
					<span key={single.id}>{single.name}</span>
				))}
			</div>
		</div>
	);
}

export default AirlineDataReader;
