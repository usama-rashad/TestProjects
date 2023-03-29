import { createAccessTokenController, createNewUserController } from "../controllers/createNewUserController";

const express = require("express");

export const createNewUserRoute = express();

createNewUserRoute.post("/createUser", createNewUserController, createAccessTokenController);
