import express from "express";
import { closeSession, login, refreshSession } from "../controllers/controller";
import { getUser } from "../middleware/getUser";
import { requireUser } from "./../middleware/requireUser";

const router = express.Router();

export const loginRoute = router.post("/login", login);
export const refreshRoute = router.get("/refresh", requireUser, refreshSession);
export const closeRoute = router.get("/delete", requireUser, closeSession);
