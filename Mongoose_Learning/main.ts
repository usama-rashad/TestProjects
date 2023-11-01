import mongoose, { Mongoose, MongooseError } from "mongoose";
import { v4 } from "uuid";
import { Room1Model } from "./schemas/Room1";
import SensorSchema from "./schemas/Sensors";

const dbURI = "mongodb://127.0.0.1:27017/DataLogger";

function getRandomnNumberBetween(low: number, high: number): number {
  let range = high - low;
  let randomnNumber = Math.random() * range;
  return randomnNumber + low;
}

async function connect() {
  await mongoose
    .connect(dbURI, { autoCreate: true })
    .then((result) => {
      console.log("Connected to DB ");
    })
    .catch((error) => {
      console.log("Error while connecting to DB " + error);
    });
}
async function addTestData() {
  //   let dataSample = new Room1Model({
  //     timeStamp: new Date(),
  //     temperature: getRandomnNumberBetween(16, 25),
  //     humidity: getRandomnNumberBetween(40, 60),
  //   });
  try {
    const dataSample1 = await Room1Model.create({
      temperature: getRandomnNumberBetween(16, 25),
      humidity: getRandomnNumberBetween(40, 60),
    });
    dataSample1.UUID = "100";
    dataSample1.devices.push({ sensorMake: "Sick", sensorModel: "T100", measuredParameter: "Temperature" });
    dataSample1.timeStamp = new Date();
    await dataSample1.save();
  } catch (error) {
    if (error instanceof MongooseError) console.log(error.message);
  }
}
async function findData() {
  let result = await Room1Model.where("temperature").gt(0);
  console.log(result.length);
}

async function callStatics() {
  let count = await Room1Model.count();
  console.log(`There are ${count} documents in the Room1 Table`);
}
async function createIndex() {}

connect();
callStatics();
addTestData();
callStatics();
createIndex();
// findData();
