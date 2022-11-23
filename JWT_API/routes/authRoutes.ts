// Package imports
import express from "express";

// Function imports
import {
  loginActionController,
  logoutActionController,
  registerActionController,
} from "../controllers/authController";

const authRouter = express.Router();

authRouter.post("/login", loginActionController);
authRouter.post("/logout", logoutActionController);
authRouter.post("/register", registerActionController);

export default authRouter;
