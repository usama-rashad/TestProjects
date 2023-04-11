import express, { Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get("/test", (req: Request, res: Response) => {
  return res.status(200).json({ response: "Good morning." });
});

app.get("/api/v1/createNewUser", async (req: Request, res: Response) => {
  let data: any = null;
  await axios.get("https://pokeapi.co/api/v2/type/5").then((reponse) => {
    data = reponse.data;
    console.log(`Data received.${new Date(Date.now()).getMinutes()}:${new Date(Date.now()).getSeconds()}`);
  });
  return res.status(200).json(data);
});

app.listen(5000, () => {
  console.log("Server started...");
});
