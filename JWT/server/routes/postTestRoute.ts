import { postTestController } from "../controllers/postTestController";

const express = require("express");

export const postTestRoute = express();

postTestRoute.post("/testPost", postTestController);
