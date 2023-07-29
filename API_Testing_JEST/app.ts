import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/test", (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).json({ message: "Server OK.", error: "" });
});

export default app;
