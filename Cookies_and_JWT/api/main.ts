import bodyParser, { urlencoded } from "body-parser";
import { closeRoute, loginRoute, refreshRoute } from "./routes/routes";

import express from "express";
import cookieparser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { getUser } from "./middleware/getUser";
import { createSession, endSession } from "./db/db";

dotenv.config();

// System
const server_port = process.env.SERVER_PORT;

const app = express();

// Middleware
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(cookieparser());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(getUser);

// Express
app.use("/api", loginRoute);
app.use("/api", refreshRoute);
app.use("/api", closeRoute);

app.listen(server_port, () => {
  console.log("Server started at port " + server_port);
});
