import express, {Request, Response} from "express";
import bodyparser from "body-parser";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

// Custom middlewares
import {verifyMiddleware} from "./middleware";

dotenv.config();
const app = express();
app.use(express.json());

// Create some dummy users
const users: API.IUser[] = [
	{id: 1, username: "john", password: "John0908", isAdmin: true},
	{id: 2, username: "jane", password: "Jane0908", isAdmin: false},
];

// Create the Endpoints
app.post("/api/login", verifyMiddleware, (req: Request, res: Response) => {
	const {username, password} = req.body;
	// Look for the username in the dummy data
	const foundUser = users.find((user) => {
		return user.username === username && user.password === password;
	});
	if (foundUser) {
		// Create and access token
		const accessToken = jwt.sign(
			{id: foundUser.id, isAdmin: foundUser.isAdmin},
			process.env.ACCESS_TOKEN_SECRET as string
		);
		return res.json({
			username: foundUser.username,
			isAdmin: foundUser.isAdmin,
			accessToken,
		});
	} else {
		return res.send("Username and/or password incorrect.");
	}
});

app.delete(
	"/api/users/delete/:userID",
	verifyMiddleware,
	(req: Request, res: Response) => {
		if (
			req.user?.id === (req.params.userID as unknown as number) &&
			req.user.isAdmin
		) {
			return res.status(200).json("User has been deleted.");
		} else {
			return res
				.status(403)
				.json("You are not authorized to delete this user.");
		}
	}
);

app.listen(process.env.SERVER_PORT, () => {
	console.log("Server started on port : " + process.env.SERVER_PORT);
});
