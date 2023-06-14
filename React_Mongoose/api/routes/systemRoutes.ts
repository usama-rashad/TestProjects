import express from "express";
import { getCodeController, serverTestController } from "../controllers/systemController";
const route = express.Router();

export const getCodeRoute = route.get("/getCode", getCodeController);
export const serverTestRoute = route.get("/test", serverTestController);
