import express from "express";
import bodyParser, { urlencoded } from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import { getSessionRoute, loginRoute, logoutRoute } from "./routes/userRoutes";

dotenv.config();

const app = express();
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(bodyParser.json());
app.use(cookieParser());

let userSessions: Record<string, { name: string; valid: boolean }>[] = [];
userSessions["1"] = [{name:"usama",valid:false}
console.log(String(Object.keys(userSessions.length + 1)));

// Add routes
app.use("/api", loginRoute);
app.use("/api", logoutRoute);
app.use("/api", getSessionRoute);

app.listen(process.env.SERVER_PORT, () => {
  console.log("Server started.");
});
