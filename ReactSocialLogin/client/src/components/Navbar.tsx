import "./Navbar.scss";

import React from "react";
import {Link} from "react-router-dom";

interface INavbarProps {
	isUser: boolean;
}

function Navbar({isUser}: INavbarProps) {
	return (
		<div className="navbar">
			<span className="logo">
				<Link className="link" to="/">
					Oz Portal
				</Link>
			</span>
			{isUser ? (
				<ul className="list">
					<li className="listItem">
						<img
							src="https://images.pexels.com/photos/8388229/pexels-photo-8388229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
							alt=""
							className="avatar"
						/>
					</li>
					<li className="listItem">Usama</li>
					<li className="listItem">Logout</li>
				</ul>
			) : (
				<Link className="link" to="">
					Login
				</Link>
			)}
		</div>
	);
}

export default Navbar;
