import express from "express";

const appPort = 4000;
const app = express();

app.get("/", (req, res, next) => {
  return res.status(200).json({ message: "Server OK" });
});

app.get("/redirect", (req, res, next) => {
  return res.redirect("/");
});

app.post("/login", (req, res, next) => {
  let { username, password } = req.body;
  if (!username || username === "" || !password || password === "") {
    return res.status(401).json({ message: "Username and/or password not provided." });
  }
});

app.listen(appPort, () => {
  console.log(`Server started at port ${appPort}`);
});
