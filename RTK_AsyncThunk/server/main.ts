import express, { Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, doc, setDoc } from "firebase/firestore";
import { auth, db } from "./firebase";

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get("/test", (req: Request, res: Response) => {
  return res.status(200).json({ response: "Good morning." });
});

app.post("/api/v1/createNewUser", async (req: Request, res: Response) => {
  let { email, password1 } = req.body;
  let p1 = await createUserWithEmailAndPassword(auth, email, password1)
    .then(async () => {
      return await setDoc(doc(db, "users"), { data: email });
    })
    .then((user) => {
      return res.status(200).json({ message: user });
    })
    .catch((error) => {
      return res.status(400).json({ message: error });
    });
});

app.listen(5000, () => {
  console.log("Server started...");
});

/*

The async thunk can get the correct response from the server. The correct response is available inside the 
"payload/data" member of the action object.

*/
