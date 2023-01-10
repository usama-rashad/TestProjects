import React, {useEffect, useState} from "react";
import "./Square.css";

function Square() {
	const [colorState, setColorState] = useState<boolean>(false);



	const changeColorAction = () => {
		setColorState(!colorState);
		colorClass = colorState ? "square red" : "square blue";
	};

	return <div className={colorClass} onClick={changeColorAction}></div>;
}

export default Square;
