import express, { Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import multer from "multer";

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

var storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./public/data");
  },
  filename: function (req, file, callback) {
    callback(null, file.originalname);
  },
});

const upload = multer({ storage: storage }).single("airlineIconFile");

app.post("/", async (req: Request, res: Response) => {
  upload(req, res, function (error) {
    if (error instanceof multer.MulterError) {
      return res.status(400).json({ server: "Error", response: { errorMessage: error } });
    } else if (error) {
      return res.status(400).json({ server: "Error", response: { errorMessage: "Unknown error" } });
    }
    let { airlineName, airlineHub } = req.body;
    console.log({ airlineNanme: airlineName, airlineHub: airlineHub, airlineIconName: req.file?.filename });
    return res.status(200).json({ server: "OK", response: { 1: airlineName, 2: airlineHub, 3: req.file?.filename } });
  });
});

app.listen(4000, () => {
  console.log("Server started.");
});
