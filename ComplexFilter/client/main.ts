import bodyParser from "body-parser";
import cors from "cors";
import express, { Request, Response } from "express";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  console.log(req.body);
  return res.status(200).json({ serverStatus: "ok" });
});

app.post("/filter/ApplySettings", (req: Request, res: Response) => {
  console.log(req.body);
  return res.status(200).json({ serverStatus: "ok" });
});

app.listen(9000, () => {
  console.log("Server started.");
});
