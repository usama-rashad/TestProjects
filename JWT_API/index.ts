import authRouter from "./routes/authRoutes";

// DOTENV
require("dotenv").config();

import Express from "express";
const app = Express();

// Use the express JSON parser
app.use(Express.json());
// Routers
app.use("/api/auth", authRouter);

// Call the API
app.listen(3000, () => {
  console.log("API has started...");
});
