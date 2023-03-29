import { checkExistingUserController } from "../controllers/checkExistingUserController";

const express = require("express");

export const checkExistingUserRoute = express();

checkExistingUserRoute.post("/checkUser", checkExistingUserController);
