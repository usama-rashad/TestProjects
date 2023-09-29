import { ref, getStorage, uploadBytesResumable, StorageError, FirebaseStorage, UploadTask } from "firebase/storage";
import { storage } from "./firebase";
import express, { request, response } from "express";
import cors from "cors";
import bodyparser from "body-parser";
import sequelize from "sequelize";
import multer from "multer";

type TFileUploadStates = "uploading" | "error" | "complete" | "";

type TFileUploadStatus = {
  filename: string;
  uploadPct: number;
  state: TFileUploadStates;
};

let fileUploadStatus: TFileUploadStatus[] = [];

// Initialize multer
const memoryStorage = multer.memoryStorage();
const uploadMW = multer({
  storage: memoryStorage,
  fileFilter(req, file, callback) {
    callback(null, true);
  },
}).array("files");

// Make an app
const app = express();
app.use(cors({ credentials: true }));
app.use(bodyparser.json());

// Update the file status
const updateFileUploadStatus = (fileName: string, uploadPct: number, state: TFileUploadStates) => {
  // Find previous instance of the filename
  let findIndex = fileUploadStatus.findIndex((value) => value.filename === fileName);
  if (findIndex === -1) {
    // If not previous entry found then add a new one
    fileUploadStatus.push({ filename: fileName, uploadPct: uploadPct, state: state });
  } else {
    // If previous entry found then update it
    fileUploadStatus[findIndex] = { filename: fileName, uploadPct: Math.round(uploadPct), state: state };
  }
  console.table(fileUploadStatus);
};

// Upload single file promise
const uploadSingleFile = (file: Express.Multer.File, storage: FirebaseStorage, path: string) => {
  return new Promise((res, rej) => {
    const fileReference = ref(storage, `${path}${file.originalname}`);
    let uploadTask = uploadBytesResumable(fileReference, file.buffer, {
      customMetadata: { filename: file.originalname, createdData: new Date().toDateString() },
    }).on(
      "state_changed",
      (snapshot) => {
        switch (snapshot.state) {
          case "running":
            let uploadPct = (snapshot.bytesTransferred / snapshot.totalBytes) * 100.0;
            updateFileUploadStatus(file.originalname, Math.round(uploadPct), "uploading");
            break;
        }
      },
      (error: StorageError) => {
        if (error instanceof StorageError) {
          updateFileUploadStatus(file.originalname, 0.0, "error");
        }
        rej(error);
      },
      () => {
        // File upload has been completed.
        updateFileUploadStatus(file.originalname, 100.0, "complete");
        res(1);
      }
    );
  });
};

// Store list of files on Firebase Storage
const uploadFiles = async (files: Express.Multer.File[], storage: FirebaseStorage, path: string) => {
  // Reset the status
  fileUploadStatus = [];
  // Loop through all the files and create an upload task for each file
  let uploadTasks = [];
  for (let index = 0; index < files.length; index++) {
    uploadTasks[index] = uploadSingleFile(files[index], storage, path);
  }
  return Promise.all(uploadTasks);
};

// Routes
app.post("/newFilesSelected", (request, response, next) => {
  let { type, fileNames } = request.body;
  if (type === "single") {
    return response.status(200).json({ message: "File loaded and ready to upload.", error: "No error" });
  } else if (type === "multiple") {
    // Update the filenames
    fileUploadStatus = [];
    for (let index = 0; index < fileNames.length; index++) {
      fileUploadStatus.push({ filename: fileNames[index], state: "", uploadPct: 0 });
    }
    return response.status(200).json({ message: "Multiple files loaded and ready to upload.", error: "No error" });
  }
});
app.post("/fileUpload", uploadMW, async (request, response, next) => {
  let { path } = request.body;
  if (!path || path === "") {
    return response.status(404).json({ message: "Folder path not specified.", error: "Incomplete information." });
  }
  if (request.files) {
    let files = request["files"] as unknown as Express.Multer.File[];
    try {
      uploadFiles(files, storage, path).then((uploadResults) => {
        return response.status(200).json({ message: "All files uploaded successfully.", info: uploadResults });
      });
    } catch (error) {
      return response.status(404).json({ message: "No files to upload.", error: error });
    }
  } else {
    return response.status(404).json({ message: "No files to upload." });
  }
});
app.get("/fileUploadStatus", (request, response, next) => {
  return response.status(200).json({ fileStatus: fileUploadStatus, error: "No error." });
});
app.post("/pauseFileUpload", (request, response, next) => {
  return response.status(200).json({ fileStatus: fileUploadStatus, error: "No error." });
});

// Start application
app.listen(4000, () => {
  console.log("Server started on port 4000.");
});
