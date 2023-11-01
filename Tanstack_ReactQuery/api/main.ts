import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import generalInterceptor from "./src/interceptor";

const SERVER_PORT = 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(generalInterceptor);

type User = {
  name: string;
  id: string;
  age: number;
};

// Variables
export let count = 0;
export function incCounter() {
  count++;
}

let administrators: User[] = [
  {
    name: "usama",
    age: 22,
    id: "oz22",
  },
  {
    name: "ayesha",
    age: 21,
    id: "atd21",
  },
];

async function getAdmins() {
  return new Promise<User[]>((res, rej) => {
    setTimeout(() => {
      res(administrators);
    }, 200);
  });
}

app.get("/getAdmins", async (req, res, next) => {
  return res.status(200).json({ message: "Request processed successfully.", data: await getAdmins(), code: 200 });
});

app.get("/getStats", (req, res, next) => {
  return res.status(200).json({ message: "Request processed successfully.", stats: { count: count }, code: 200 });
});

app.post("/setAdmin", (req, res, next) => {
  let newAdmin = req.body.adminUser;
  administrators.push(newAdmin);
  setTimeout(() => {
    return res.status(200).json({ message: "Request processed successfully.", data: administrators, code: 200 });
  }, 200);
});

app.listen(SERVER_PORT, () => {
  console.log("Server started.");
});
