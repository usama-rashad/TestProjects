import Google from "../../../client/images/google.png";
import Github from "../../../client/images/github.png";
import Facebook from "../../../client/images/facebook.jpg";

import "./Login.scss";

import React from "react";

function Login() {
	return (
		<div className="login">
			<h1 className="loginTitle">Choose your login method</h1>
			<div className="wrapper">
				<div className="left">
					<div className="loginButton google">
						<img src={Google} alt="" className="icon" />
					</div>
					<div className="loginButton github">
						<img src={Github} alt="" className="icon" />
					</div>
					<div className="loginButton facebook">
						<img src={Facebook} alt="" className="icon" />
					</div>
				</div>
				<div className="center">
					<div className="line" />
					<div className="or">OR</div>
				</div>
				<div className="right">
					<input placeholder="Username" />
					<input placeholder="Password" />
					<button>Login</button>
				</div>
			</div>
		</div>
	);
}

export default Login;
