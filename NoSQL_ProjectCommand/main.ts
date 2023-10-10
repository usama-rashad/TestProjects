import { MongoClient, Document } from "mongodb";

const dbURL = "mongodb://127.0.0.1:27017";
const dbName = "Hertz";
const connection = new MongoClient(dbURL);

console.log("Starting program...");

async function main() {
  await connection.connect();
  const db = connection.db(dbName);
  const collection = db.collection("cars");
  let cursor = db.runCursorCommand({ find: "cars", filter: { model: 2020 } });

  while (await cursor.hasNext()) {
    let doc = await cursor.next();
    console.log(doc);
  }
}
main();
