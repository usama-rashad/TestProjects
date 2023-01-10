import dotenv from "dotenv";
import express from "express";
import cookieparser from "cookie-parser";
import jwt from "jsonwebtoken";
import bodyparser from "body-parser";

// Types
import { Request, Response } from "express";

//Confgure DOTENV
dotenv.config();

// Setup express app
const app = express();

// Setup the middlewares to parse the body and headers
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieparser());

const userCredentials = {
  username: "admin",
  password: "12345678",
  email: "admin@gmail.com",
};

app.post("/login", (req: Request, res: Response) => {
  // Get the username and password from the body
  const { username, password } = req.body;
  // Check if the username and password match
  if (
    username === userCredentials.username &&
    password === userCredentials.password
  ) {
    // Create the access token
    const accessToken = jwt.sign(
      {
        username: userCredentials.username,
        email: userCredentials.email,
      },
      process.env.JWT_SECRET_KEY as string,
      {
        expiresIn: "1m",
      }
    );

    // Create the refresh token
    const refreshToken = jwt.sign(
      {
        username: userCredentials.username,
      },
      process.env.JWT_SECRET_KEY as string
    );
  }
});
