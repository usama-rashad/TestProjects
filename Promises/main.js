const { read } = require("./DB");

read(false)
  .then((result) => {
    console.log("Executed. Result " + result);
  })
  .catch((err) => {
    console.log("Failed. Error " + err);
  })
  .finally(() => {
    console.log("Always run.");
  });
