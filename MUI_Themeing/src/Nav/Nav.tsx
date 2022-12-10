import "./Nav.scss";

import React from "react";

function Nav() {
	return (
		<div className="nav">
			<div className="indicator">
				<div className="line"></div>
				<div className="stops">
					<div className="dots"></div>
					<div className="dots"></div>
					<div className="dots"></div>
				</div>
			</div>
		</div>
	);
}

export default Nav;
