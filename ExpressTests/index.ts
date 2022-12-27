const express = require("express");
const app = express();
const router = express.Router();
const fs = require("fs");

import {Request, Response} from "express";

let fileCount: number = 1;

router.get("/", (req: Request, res: Response) => {
	setTimeout(() => {
		let timeStamp = Date.now();
		let fileStamp = `${timeStamp}, File ID : ${fileCount} \r\n`;
		fileCount = fileCount + 1;
		fs.appendFileSync("./logs/logFile.txt", fileStamp, (err: Error) => {
			if (err)
				console.log("Error while writing the file. Error code is : " + err);
		});
		return res.status(200).send("Done");
	}, 2000);
});

router.get("/download", (req: Request, res: Response) => {
	res.redirect("/");
});

app.use(router);

app.listen(3000, () => {
	console.log("Server started.");
});
