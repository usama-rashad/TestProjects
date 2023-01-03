import { DataSource } from "typeorm";
import { Airlines } from "./dbTables";

require("dotenv").config();

export const dbDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "vscode",
  password: process.env.DB_PASSWORD,
  database: "flightPlanner",
  synchronize: true,
  entities: [Airlines],
});
