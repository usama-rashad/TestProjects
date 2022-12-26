const bodyparser = require("body-parser");

import airlineDataRouter from "./routes/airlineDataRouter";
import cors from "cors";

// Routes

require("dotenv").config();

const express = require("express");
const app = express();

app.use(bodyparser.json());
app.use(cors());

app.get(process.env.API_ROOT as string, airlineDataRouter);

app.listen(process.env.SERVER_PORT, () => {
	console.log("Express server started at port : " + process.env.SERVER_PORT);
});
