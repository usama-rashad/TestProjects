import express, { Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get("/test", (req: Request, res: Response) => {
  return res.status(200).json({ response: "Good morning." });
});

app.post("/api/v1/createNewUser", (req: Request, res: Response) => {
  let { username, password } = req.body;
  console.log(`Data ${username} ${password}`);
  return res.status(200).json("Server OK");
});

app.listen(5000, () => {
  console.log("Server started...");
});
