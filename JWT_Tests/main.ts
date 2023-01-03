const Jwt = require("jsonwebtoken");

let tokenData = { name: "usama", password: "1234" };
let token = Jwt.sign(tokenData, "mysecret", {
  algorithm: "HS512",
  expiresIn: "5s",
});

setInterval(() => {
  let decode = Jwt.verify(token, "mysecret", { algorithm: "HS512" });
  console.log(decode);
}, 1000);
