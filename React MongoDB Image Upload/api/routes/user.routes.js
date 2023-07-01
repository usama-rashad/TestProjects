import express from "express";
import multer from "multer";
import { v4 } from "uuid";
import usersModel from "./../models/User.js";

let pct = 0;

const diskStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    let uuid = v4();
    let fileName = file.fieldname + "_" + Date.now() + "_" + file.originalname;
    cb(null, fileName);
    // Add the filename for further use
    req.fileName = fileName;
  },
  fileSize: (req, file, cb) => {
    if (file.fileSize > file.limits.fileSize) {
      req.fileSizeLimit = true;
      cb(null, false);
    } else {
      cb(null, true);
    }
  },
});

const upload = multer({
  storage: diskStorage,
  limits: { fileSize: 1024 * 1024 * 1 },
});
const router = express.Router();

let fileUploadState = { uploadPct: 0, uploadComplete: false };

const fileUploadRoute = router.post("/fileUpload", upload.single("imageFile"), async (req, res) => {
  try {
    let document = new usersModel();
    document.username = req.body.imageName;
    document.imagePath = req.fileName;
    let user = await document.save();
    return res.status(200).json({ message: "OK", user: user });
  } catch (err) {
    console.log("Error." + err);
    return res.status(500).json({ error: err });
  }
});

export { fileUploadRoute };
