import {diskStorage} from "multer";
import {Request, Response} from "express";
const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");

const multer = require("multer");
const app = express();

app.use(cors());

app.use(bodyparser.json());
// app.use(bodyparser.urlencoded({extended: true}));

let fileCounter: number = 0;

require("dotenv").config();

// Create a storage for multer
const multerDiskStorage = diskStorage({
	destination(req, file, callback) {
		callback(null, "./uploads");
	},
	filename(req, file, callback) {
		fileCounter = fileCounter + 1;
		console.log(
			"File number " + fileCounter + " received. Name :" + file.originalname
		);
		callback(null, file.originalname);
	},
});

// Create the multer middleware
const uploadMW = multer({
	storage: multerDiskStorage,
});

// Create an enpoint to receive the file
app.post("/", uploadMW.single("file"), (req: Request, res: Response) => {
	return res.status(200).send("OK");
});

app.listen(process.env.SERVER_PORT, () => {
	console.log("Server started at port " + process.env.SERVER_PORT + ".");
});
