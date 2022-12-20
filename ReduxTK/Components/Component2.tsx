import React, {useState} from "react";
import "./Component2.scss";

function Component2() {
	const [value, setValue] = useState<number>(123);

	const changeAction = () => {
		console.log("Changing value button pressed.");
		setValue(1);
	};

	return (
		<div className="component2">
			<span>Component 2 : {value}</span>
			<button onClick={changeAction}>Change</button>
		</div>
	);
}

export default Component2;
