import express, { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { createSession, endSession, findUser } from "../db/db";
import { privateKey, publicKey } from "./keys";
import { signJWT, verifyJWT } from "../utils/jwt_utils";

export const login = (req: Request, res: Response) => {
  let { username, password } = req.body;
  if (!username || !password) {
    return res.status(403).json({ error: "Username and/or password invalid." });
  }
  // Find the user details
  let user = findUser({ name: username, password: password, email: "" });
  if (user) {
    const session = createSession(user.email, user.name);

    // Create a refresh token as well as a refresh token
    const accessToken = signJWT({ ...user }, "5s");
    const refreshToken = signJWT({ sessionID: session.sessionId }, "1y");

    // Set the cookies
    res.cookie("accessToken", accessToken, { httpOnly: true, maxAge: 5 * 1000 });
    res.cookie("refreshToken", refreshToken, { httpOnly: true, maxAge: 1 * 365 * 24 * 3600 * 1000 });
    return res.status(200).json(session);
  } else {
    return res.status(404).send("Invalid username or password.");
  }
};
export const closeSession = (req: Request, res: Response) => {
  res.cookie("accessToken", "", { httpOnly: true, maxAge: 0 });
  res.cookie("refreshToken", "", { httpOnly: true, maxAge: 0 });
  // @ts-ignore
  const session = endSession(req.user.sessionID);
  return res.status(200).send(session);
};
export const refreshSession = (req: Request, res: Response) => {
  //@ts-ignore
  return res.status(200).send(req.user);
};
