const express = require("express");
const app = express();

app.get("/", (req: Request, res: Response) => {
	res.render("index.html");
});

app.listen(3000, () => {
	console.log("Server started.");
});
