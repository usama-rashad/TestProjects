import express, { Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { addBookRoute, deleteBookRoute, updateBookRoute, issueBookRoute, returnBookRoute } from "./routes/bookRoutes";
import { getCodeRoute, serverTestRoute } from "./routes/systemRoutes";
import { addCategoryRoute } from "./routes/categoryRoutes";

dotenv.config();

const app = express();

// Mongo DB connection
const username = process.env.MONGOOSE_USERNAME;
const password = process.env.MONGOOSE_PASSWORD;
const dbConnection = mongoose.connect(`mongodb+srv://cluster0.mc2gnb2.mongodb.net/MTL`, {
  auth: { username: username, password: password },
  autoCreate: true,
});

dbConnection
  .then((data) => {
    console.log("DB connected.");
  })
  .catch((err) => {
    console.log("DB connection failed. Error " + err);
  });

// Middleware
app.use(cors());
app.use(bodyParser.json());

// System routes
app.use("/system", getCodeRoute);
app.use("/system", serverTestRoute);

// Book routes
app.use("/book", updateBookRoute);
app.use("/book", addBookRoute);
app.use("/book", deleteBookRoute);
app.use("/book", issueBookRoute);
app.use("/book", returnBookRoute);

// Category routes
app.use("/category", addCategoryRoute);

// Server listen
app.listen(5000, () => {
  console.log("Server started.");
});
