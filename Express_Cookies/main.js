import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

app.get("/getToken", (req, res) => {
  let cookies = req.cookies;
  let cookieKeys = Object.values(cookies);
  let options = {
    maxAge: 1000 * 60 * 15, // would expire after 15 minutes
    httpOnly: true, // The cookie only accessible by the web server
    signed: false, // Indicates if the cookie should be signed
  };
  res.cookie("loginFlag", 1, options);
  res.send();
});

app.listen(2000, () => {
  console.log("Server started.");
});
