import express, {Request, Response} from "express";
import cors from "cors";
import {testMiddleware} from "./middleware";
const app = express();

app.use(cors());
require("dotenv").config();

let reqCount: number = 0;

app.get("/", testMiddleware, (req: Request, res: Response) => {
	reqCount++;
	console.log(req.user);
	setTimeout(() => {
		return res
			.status(200)
			.json("Number of times the request has been made : " + reqCount);
	}, 2000);
});

app.listen(process.env.API_PORT, () => {
	console.log("Server started on port " + process.env.API_PORT);
});
