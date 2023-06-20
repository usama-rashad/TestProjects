import express from "express";
import { getSessionController, loginController, logoutController } from "../controllers/userController";

const router = express.Router();

const loginRoute = router.post("/login", loginController);
const logoutRoute = router.get("/logout", logoutController);
const getSessionRoute = router.get("/getSession", getSessionController);

export { loginRoute, logoutRoute, getSessionRoute };
