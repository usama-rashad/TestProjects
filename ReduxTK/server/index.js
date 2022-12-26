"use strict";
exports.__esModule = true;
var express = require("express");
var ExpressApp = express();
ExpressApp.get("/", function (req, res) {
    return res.status(200).send("Hi Usama");
});
ExpressApp.listen(3000, function () {
    console.log("Express server started.");
});
