import {Request, Response} from "express";
import {diskStorage} from "multer";

const express = require("express");
const multer = require("multer");
const cors = require("cors");
const bp = require("body-parser");

const app = express();
app.use(bp.json());
app.use(bp.urlencoded({extended: true}));
app.use(cors());

// Setup Dotenv
require("dotenv").config();

const multerStorage = diskStorage({
	destination: (req, file, cb) => {
		cb(null, "./uploads");
	},
	filename: (req, file, cb) => {
		console.log("Filename :" + file.originalname);
		cb(null, file.originalname);
	},
});

const multerMiddleWare = multer({storage: multerStorage});
console.log(multerMiddleWare);

app.post(
	"/",
	multerMiddleWare.single("file"),
	(req: Request, res: Response) => {
		console.log("Request header : " + JSON.stringify(req.file));
		return res.status(200).send("OK");
	}
);

app.listen(process.env.SERVER_PORT, () => {
	console.log("Server has started on port " + process.env.SERVER_PORT + ".");
});
