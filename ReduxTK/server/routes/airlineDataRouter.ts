const express = require("express");
const airlineDataRouter = express.Router();

require("dotenv").config();

import {
	home,
	getAirlineData,
	setAirlineData,
} from "../controllers/airlineDataController";

airlineDataRouter.get("/", home);
airlineDataRouter.get("/airline/getAll", getAirlineData);
airlineDataRouter.post("/airline/add", setAirlineData);

export default airlineDataRouter;
