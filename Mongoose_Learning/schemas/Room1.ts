import mongoose, { Schema } from "mongoose";
import { v4 } from "uuid";

import SensorSchema from "./Sensors";

let preTimeStamp: number;
let postTimeStamp: number;

const room1Schema = new Schema(
  {
    timeStamp: { type: Date, required: true, default: () => Date.now(), immutable: true },
    temperature: Number,
    humidity: Number,
    devices: [SensorSchema],
    UUID: { type: mongoose.SchemaTypes.String, default: () => v4(), immutable: true },
  },
  { timestamps: true }
);

// Middleware
room1Schema.pre("save", {}, function (next) {
  preTimeStamp = Date.now();
  next();
});

room1Schema.post("save", {}, function () {
  postTimeStamp = Date.now();
  console.log(`Save time duration ${postTimeStamp - preTimeStamp}`);
});

// Static methods
room1Schema.statics.count = function count() {
  return Room1Model.countDocuments();
};

export let Room1Model = mongoose.model("Room1", room1Schema);
