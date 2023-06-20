import express from "express";
import multer from "multer";
import { v4 } from "uuid";
const diskStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    console.log("Filename : " + file.originalname);

    let uuid = v4();
    let fileName = file.fieldname + "_" + uuid + "." + file.originalname.split(".")[1];
    cb(null, fileName);
    // Add the filename for further use
    req.fileName = fileName;
  },
});

const upload = multer({ storage: diskStorage });
const router = express.Router();

const fileUploadRoute = router.post("/fileUpload", upload.single("imageFile"), (req, res) => {
  console.log(req.file);
  setTimeout(() => {
    return res.status(200).send("OK");
  }, 2000);
});

export { fileUploadRoute };
