import { DataSource } from "typeorm";
import { Airlines } from "./dbTables";

require("dotenv").config();

export const dbDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: process.env.DB_PASSWORD,
  database: "FlightPlanner",
  synchronize: true,
  entities: [Airlines],
});
