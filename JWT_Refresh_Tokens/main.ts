import dotenv from "dotenv";
import express from "express";
import cookieparser from "cookie-parser";
import jwt from "jsonwebtoken";
import bodyparser from "body-parser";

// Custom middlewares
import {middleware} from "./middlware";

// Types
import {Request, Response} from "express";

//Confgure DOTENV
dotenv.config();

// Setup express app
const app = express();

// Setup the middlewares to parse the body and headers
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieparser());

const userCredentials = {
	username: "admin",
	password: "12345678",
	email: "admin@gmail.com",
};

// Login endpoint to create access token and refresh token
app.post("/login", middleware, (req: Request, res: Response) => {
	// Get the username and password from the body
	const {username, password} = req.body;
	// Check if the username and password match
	if (
		username === userCredentials.username &&
		password === userCredentials.password
	) {
		// Create the access token
		const accessToken = jwt.sign(
			{
				username: userCredentials.username,
				email: userCredentials.email,
			},
			process.env.JWT_SECRET_KEY as string,
			{
				expiresIn: "1m",
			}
		);

		// Create the refresh token
		const refreshToken = jwt.sign(
			{
				username: userCredentials.username,
			},
			process.env.JWT_SECRET_KEY as string,
			{
				expiresIn: "1d",
			}
		);

		// Assign the refresh token in an http-only cookie
		res.cookie("jwt", refreshToken, {
			httpOnly: true,
			sameSite: "none",
			secure: true,
			maxAge: 24 * 60 * 60 * 1000,
		});
		return res.json({accessToken});
	} else {
		// Return an error saying that credentials dont match
		return res.status(406).json({message: "Credentials dont match"});
	}
});

// Endpoint to create refresh token
app.post("/refresh", (req: Request, res: Response) => {
	if (req.cookies?.jwt) {
		// Take the refresh token out from the cookie
		const refreshToken = req.cookies.jwt;

		// Verify refresh token
		const verifyOK = jwt.verify(
			refreshToken,
			process.env.JWT_SECRET_KEY as string
		);
	}
});

app.listen(process.env.SERVER_PORT, () => {
	console.log(`Server active on http://localhost:${process.env.SERVER_PORT}!`);
});
