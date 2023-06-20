import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import { fileUploadRoute } from "./routes/user.routes.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", fileUploadRoute);

app.listen(5000, () => {
  console.log("Server started...");
});
