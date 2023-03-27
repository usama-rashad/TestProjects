import { Request, Response } from "express";
import { checkExistingUser, createNewUser } from "../database/dbUserFeatures";
import dbReady from "../database/dbConnection";

export const createNewUserController = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  if (dbReady) {
    // Check if user exists
    await checkExistingUser(username)
      .then((user) => {
        // User data found. Check if 'null'
        if (user == null) {
          createNewUser(username, password)
            .then((user) => {
              return res.status(200).json({ message: `New user ${user.username} created.` });
            })
            .catch((err) => {
              return res.status(404).json({ message: `Failed to create new user ${username}. Error ${err}` });
            });
        } else {
          return res.status(404).json({ message: `User ${username} already exists.` });
        }
      })
      .catch((err) => {
        return res.status(404).json({ message: `Failed to check existing user. DB error ${err}` });
      });
  }
};

export default { createNewUserController };
