import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import { v4 } from "uuid";

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

const adminUser = { username: "usama", password: 123 };

let sessionTable = [];

const updateSessionTable = ({ sessionID, username, timeStamp }) => {
  // Find a previous username
  let previousIndex = sessionTable.findIndex((v) => v.username === username);
  if (previousIndex >= 0) {
    sessionTable.splice(previousIndex, 1, { sessionID: sessionTable[previousIndex].sessionID, username: username, timeStamp: timeStamp });
    console.log("Updated the user session with username :" + username);
  } else {
    sessionTable.push({ sessionID: sessionID, username: username, timeStamp: timeStamp });
    console.log("Added a new user session with username :" + username);
  }
  console.table(sessionTable);
};

const clearSession = ({ sessionID }) => {
  // Find a previous username
  let previousIndex = sessionTable.findIndex((v) => v.sessionID === sessionID);
  if (previousIndex >= 0) {
    sessionTable.splice(previousIndex, 1);
    console.log("Cleared the user session. Existing sessions are ");
    console.table(sessionTable);

    return 1;
  } else {
    console.log("Did not find any user session. Existing sessions are : ");
    console.table(sessionTable);

    return 0;
  }
};

const findUserInCookies = (cookie) => {
  let { username, sessionID } = cookie;
  return { username, sessionID };
};

app.post("/login", (req, res) => {
  let { username, password } = req.body;

  let options = {
    maxAge: 1000 * 60 * 15, // would expire after 15 minutes
    httpOnly: true, // The cookie only accessible by the web server
    signed: false, // Indicates if the cookie should be signed
  };

  if (username === adminUser.username && password === adminUser.password) {
    // Create a session ID and store it in the table
    let sessionID = v4();
    updateSessionTable({ sessionID: sessionID, username: username, timeStamp: new Date() });
    res.cookie("loginStatusCookie", { sessionID: sessionID, username: username }, options);
    res.status(200).json({ message: "Login success." }).send();
  } else {
    res.status(200).json({ message: "Login failed." });
  }
});

app.post("/logout", (req, res) => {
  let cookies = cookieParser.JSONCookies(req.cookies);
  if (cookies["loginStatusCookie"]) {
    let { username, sessionID } = cookies["loginStatusCookie"];
    let clearResult = clearSession({ sessionID });
    if (clearResult === 1) {
      res.clearCookie("loginStatusCookie");
      return res.status(200).json({ message: "Logout success." }).send();
    } else {
      return res.status(404).json({ message: "Logout failed. No previous user session found." }).send();
    }
  } else {
    return res.status(404).json({ message: "Logout failed. No previous login session found." });
  }
});

app.post("/checkLogin", (req, res) => {
  console.log("Re-login. Current sessions.");
  console.table(sessionTable);

  let cookies = cookieParser.JSONCookies(req.cookies);
  if (cookies["loginStatusCookie"]) {
    let { username, sessionID } = findUserInCookies(cookies["loginStatusCookie"]);
    // Check if the session ID exists in the session table
    let result = sessionTable.findIndex((session) => session.sessionID === sessionID);
    if (result >= 0) {
      return res.status(200).json({ message: "Re-login success.", cookieData: { user: username, sessionID: sessionID } });
    } else {
      return res.status(404).json({ message: "Re-login failed." });
    }
  } else {
    return res.status(404).json({ message: "No user session found i.e. login cookie missing" });
  }
});

app.listen(2000, () => {
  console.log("Server started.");
});
