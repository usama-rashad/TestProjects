import mongoose from "mongoose";

export const dbConnectionString = "mongodb://0.0.0.0:27017/FileBase";

const dbConnection = mongoose
  .connect(dbConnectionString, {})
  .then((result) => {
    console.log("DB connection successfull. ");
  })
  .catch((err) => {
    console.log("DB connection error. ");
  });

export default dbConnection;
