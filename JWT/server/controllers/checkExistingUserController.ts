import { Request, Response } from "express";
import { sign, decode } from "jsonwebtoken";
import { checkExistingUser, checkUserPassword } from "../database/dbUserFeatures";
import dbReady from "../database/dbConnection";

export const checkExistingUserController = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  if (!dbReady) {
    return res.status(404).json({ message: `DB not ready. Try again later.`, error: 1 });
  }
  // Check for valid input
  if (username == "" || password == "") {
    return res.status(400).json({ message: `No username or password entered. Try again.`, error: 1 });
  }
  // Check if there is an existing user with the same name as in the request
  checkExistingUser(username).then((userfound) => {
    if (userfound) {
      checkUserPassword(password, userfound.password)
        .then((result) => {
          if (result) {
            // Password correct
            return res.status(200).json({ message: `User ${username} found and authenticated.`, error: 0 });
          } else {
            // Password incorrect
            return res.status(401).json({ message: `User ${username} password incorrect. Check your password`, error: 1 });
          }
        })
        .catch((err) => {
          // System error
          return res.status(404).json({ message: "System error while checking for password.", error: 1 });
        });
    } else {
      // User not found
      return res.status(404).json({ message: `User ${username} not found.`, error: 1 });
    }
  });
};
