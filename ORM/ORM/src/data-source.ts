import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User";
import * as dotenv from "dotenv";
dotenv.config();

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "ormuser",
  password: process.env.ORM_DB_PASSWORD,
  database: "ormtest",
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: [],
  subscribers: [],
  insecureAuth: false,
});
