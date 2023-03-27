import { serverTestController } from "../controllers/serverTestController";

const express = require("express");

export const serverTestRoute = express();

serverTestRoute.get("/getTime", serverTestController);
