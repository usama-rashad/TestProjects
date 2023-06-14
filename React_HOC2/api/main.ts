import express, { urlencoded } from "express";
import bodyparser from "body-parser";
import cors from "cors";
import { Request, Response } from "express";

const app = express();

app.use(bodyparser.json());
app.use(cors());

app.post("/", (req: Request, res: Response) => {
  return res.status(200).json({ message: "OK" });
});

app.post("/applyFilter", (req: Request, res: Response) => {
  console.log(req.body);
  return res.status(200).json({ message: "Filter settings OK", response: req.body });
});

app.listen(5000, () => {
  console.log("API started...");
});
