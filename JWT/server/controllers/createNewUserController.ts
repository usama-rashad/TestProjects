import { NextFunction, Request, Response } from "express";
import { checkExistingUser, createNewUser } from "../database/dbUserFeatures";
import dbReady, { mySqlDb } from "../database/dbConnection";
import { sign } from "jsonwebtoken";
import { AccessToken } from "../entities/accessTokens";

export const createNewUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { username, password, reenteredPassword } = req.body;
  if (dbReady) {
    // Check if the password is the same both times it is entered
    if (password !== reenteredPassword) {
      return res
        .status(404)
        .json({ message: `Passwords do not match.`, error: 1 });
    }

    // Check if fields are populated
    if (username == "" || password == "" || reenteredPassword == "") {
      return res.status(404).json({ message: `Missing field.`, error: 1 });
    }

    // Check if user exists
    await checkExistingUser(username)
      .then((user) => {
        // User data found. Check if 'null'
        if (user == null) {
          createNewUser(username, password)
            .then((user) => {
              res.append("username", username);
              res.append("password", password);
              // After creating the user make an access token.
              next();
            })
            .catch((err) => {
              return res
                .status(404)
                .json({
                  message: `Failed to create new user ${username}. Error ${err}`,
                });
            });
        } else {
          return res
            .status(404)
            .json({ message: `User ${username} already exists.` });
        }
      })
      .catch((err) => {
        return res
          .status(404)
          .json({ message: `Failed to check existing user. DB error ${err}` });
      });
  }
};

export async function createAccessTokenController(req: Request, res: Response) {
  let username: string = res.get("username") as string;
  let password: string = res.get("password") as string;
  // Create and store an access token with a 1 minute expiry time
  let token = sign(
    { user: username, pass: password },
    process.env.ACCESS_TOKEN_SECRET as unknown as string,
    { expiresIn: "10m" }
  );

  // Save the token in the database
  let newAccessToken = new AccessToken();
  newAccessToken.username = username;
  newAccessToken.accessToken = token;

  // Insert new OR update exising
  await mySqlDb
    .getRepository(AccessToken)
    .save(newAccessToken)
    .then(() => {
      return res.status(200).json({ message: `New user ${username} created.` });
    })
    .catch((err) => {
      return res
        .status(500)
        .json({ message: `Error while creating user access token.` });
    });
}

export default { createNewUserController, createAccessTokenController };
