const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./database/dbConnection");
const bodyparser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();
import { Request, Response } from "express";

// Routes
import { serverTestRoute } from "./routes/serverTestRoute";
import { postTestRoute } from "./routes/postTestRoute";
import { createNewUserRoute } from "./routes/createNewUserRoute";
import { checkExistingUserRoute } from "./routes/checkExistingUserRoute";

app.use(bodyparser.json());
app.use(cors());

app.use("/", serverTestRoute);
app.use("/", postTestRoute);
app.use("/", createNewUserRoute);
app.use("/", checkExistingUserRoute);

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server started on port ${process.env.SERVER_PORT}`);
});
