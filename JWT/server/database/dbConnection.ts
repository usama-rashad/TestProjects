import dotenv from "dotenv";
dotenv.config();

// JWT
import { verify } from "jsonwebtoken";

// Database
import { DataSource } from "typeorm";
import { User } from "../entities/users";
import { AccessToken } from "../entities/accessTokens";
import { createNewUser } from "./dbUserFeatures";

import e from "express";
import { RefreshToken } from "../entities/refreshTokens";

let username: string;
let password: string;
let port: number;
let dbReady: boolean = false;

if ((process.env.ENVIRONMENT = "laptop")) {
  (username = "ormuser"), (password = "1234"), (port = 3307);
} else if ((process.env.ENVIRONMENT = "desktop")) {
  (username = "ormuser"), (password = "1234!@#$"), (port = 3306);
} else {
  console.log("Select environment in .env file.");
  process.exit();
}

export const mySqlDb = new DataSource({
  type: "mysql",
  username: username,
  password: password,
  host: "localhost",
  database: "jwt",
  port: port, // 3307 for laptop , 3306 for desktop
  entities: [User, AccessToken, RefreshToken],
  logging: false,
  insecureAuth: false,
  synchronize: false,
});

mySqlDb
  .initialize()
  .then(() => {
    console.log("Database has been initialized...");
    dbReady = true;
  })
  .catch((err) => {
    console.error("Error during database initialization.Error code:", err);
  });

export default { dbReady };
