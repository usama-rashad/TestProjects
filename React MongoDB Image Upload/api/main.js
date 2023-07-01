import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dbConnection from "./db/db.js";
import { fileUploadRoute } from "./routes/user.routes.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

dbConnection;

app.use("/api", fileUploadRoute);

app.listen(5000, () => {
  console.log("Server started...");
});
