// server.js
const express = require("express");
const multer = require("multer");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

const fileStoreage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "---" + file.originalname);
  },
});

const upload = multer({ storage: fileStoreage });

app.post("/upload_files", upload.single("file"), (req, res) => {
  console.log(req.file);
  return res.status(200);
});

app.listen(5000, () => {
  console.log(`Server started...`);
});
