import { loginController } from "../controllers/loginController";

const express = require("express");

export const checkExistingUserRoute = express();

checkExistingUserRoute.post("/login", loginController);
