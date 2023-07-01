import React from "react";
import "./Button.scss";

function Button({ name, onClick }) {
	return (
		<div className='mainButton'>
			<div id={`${name}Portal`} className="portal"></div>
			<button onClick={onClick}>{name}</button>
		</div>
	);
}

export default Button;
