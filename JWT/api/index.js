const { json } = require("express");
const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();

app.use(express.json());

const users = [
  {
    id: "1",
    username: "john",
    password: "john1234",
    isAdmin: true,
  },
  {
    id: "2",
    username: "jane",
    password: "jane789",
    isAdmin: false,
  },
];

app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => {
    return u.username === username && u.password === password;
  });
  if (user) {
    // Generate an access token
    const accessToken = jwt.sign(
      { id: user.id, isAdmin: user.isAdmin },
      "mySecretKey"
    );

    res.json({ username: user.username, isAdmin: user.isAdmin, accessToken });
  } else {
    res.status(400).json("Username or password incorrect");
  }
});

const verify = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, "mySecretKey", (err, user) => {
      if (err) return res.status(403).json("Token is invalid.");
      req.user = user;
      next();
    });
  } else {
    res.status(401).json("You are not authenticated.");
  }
};

app.delete("/api/users/:userId", verify, (req, res) => {
  if (req.user.id === req.params.userId || req.user.isAdmin) {
    res.status(200).json("User has been deleted");
  } else {
    res.status(403).json("You are not allowed to delete this user");
  }
});

// API call
app.listen(3000, () => {
  console.log("API has been started.");
});
