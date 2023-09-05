import express from "express";

const app = express();

app.use("/static", express.static("public"));

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.listen(3000, () => {
  console.log("Server started.");
});
