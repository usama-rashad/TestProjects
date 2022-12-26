const express = require("express");
const airlineDataRouter = express.Router();

import {airlineDataController} from "../controllers/airlineDataController";

airlineDataRouter.get("/", airlineDataController);

export default airlineDataRouter;
