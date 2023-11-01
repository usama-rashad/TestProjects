import mongoose from "mongoose";

const sensorSchema = new mongoose.Schema({
  sensorMake: String,
  sensorModel: String,
  measuredParameter: String,
});

export default sensorSchema;
