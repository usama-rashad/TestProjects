const express = require("express");
const mongoose = require("mongoose");
const db = require("./keys").mongoURI;
const createServer = require("./createServer");

mongoose
  .connect(db)
  .then(() => {
    const app = createServer();
    const port = process.env.PORT || 3000;
    console.log("Launching app...");
    app.listen(port, () => {
      console.log("App running on port ${port}");
    });
  })
  .catch((error) => {
    console.log("Could not connect to MongoDB and start the server");
    console.log(error);
  });
