import { dbDataSource } from "./database/dbConnection";
import { Airlines } from "./database/dbTables";
import airlineDataRouter from "./routes/airlineDataRouter";
import cors from "cors";

// Routes
const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const db = require("./database/dbConnection");

app.use(bodyparser.json());
app.use(cors());

app.use(process.env.API_ROOT, airlineDataRouter);

dbDataSource
  .initialize()
  .then(() => {
    console.log("DB connection ready");
    app.listen(process.env.SERVER_PORT, () => {
      console.log(
        "Express server started at port : " + process.env.SERVER_PORT
      );
    });
  })
  .catch((err) => {
    console.log("DB connection error. Error details : " + err);
  });
