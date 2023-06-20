import express, { Request, Response } from "express";
import { findUser } from "../db/userDB";

function loginController(req: Request, res: Response) {
  let { username, password } = req.body;
  // Check the username in the user DB and verify the password
  let userVerification = findUser({ username: username, password: password });
  if (userVerification) {
    return res.status(200).send("User found.");
  } else {
    return res.status(404).send("User not found.");
  }
}

function getSessionController(req: Request, res: Response) {
  return res.status(200).send("get Session controller triggered.");
}

function logoutController(req: Request, res: Response) {
  return res.status(200).send("logout controller triggered.");
}

export { loginController, getSessionController, logoutController };
