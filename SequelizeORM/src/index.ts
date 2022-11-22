import { connect } from "./connect";

connect()
  .then(() => {
    console.log("Done");
  })
  .catch(() => {
    console.log("Failed.");
  });
