import { DataSource } from "typeorm";
import { User } from "../entities/users";
import { mySqlDb } from "./dbConnection";
import { sign } from "jsonwebtoken";
import * as bcrypt from "bcrypt";

const BCRYPT_SALT_ROUNDS: number = 10;

const dotenv = require("dotenv");
dotenv.config();

export const checkExistingUser = async (name: string): Promise<User | null> => {
  let promise: Promise<User | null> = mySqlDb.getRepository(User).findOneBy({ username: name });
  return promise;
};

export const createNewUser = async (name: string, password: string): Promise<User> => {
  let salt = bcrypt.genSaltSync(BCRYPT_SALT_ROUNDS);
  let hashedPassword: string = "";
  let newUser = new User();

  await bcrypt
    .hash(password, salt)
    .then((result) => {
      hashedPassword = result;
    })
    .finally(() => {
      newUser.username = name;
      newUser.password = hashedPassword;
    });

  // Try to save into the DB
  return mySqlDb.getRepository(User).save(newUser);
};

export const checkUserPassword = async (password: string, hashedDBPassword: string): Promise<boolean> => {
  let p = bcrypt.compare(password, hashedDBPassword);
  return p;
};
