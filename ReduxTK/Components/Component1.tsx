import React from "react";
import "./Component1.scss";

function Component1() {
	let value: number = 123;
	return (
		<div className="component1">
			<span>Component 1 : {value}</span>
		</div>
	);
}

export default Component1;
