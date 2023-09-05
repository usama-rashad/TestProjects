import "./FileUploader.scss";

import React, { useState } from "react";
import { getApp } from "firebase/app";
import { ref, getStorage, getDownloadURL, uploadBytesResumable, UploadTask } from "firebase/storage";
import { initializeApp } from "firebase/app";

function FileUploader() {
  const [file, setFile] = useState<FileList>();
  const [uploadLink, setUploadLink] = useState<string>("");
  const [uploadMessage, setUploadMessage] = useState<string>("");

  // TODO: Replace the following with your app's Firebase project configuration
  const firebaseConfig = {
    apiKey: "AIzaSyA2J1nE21KpCOgT0FT9hDEe2O0vavulO38",
    authDomain: "modernlibrary-9bd2c.firebaseapp.com",
    projectId: "modernlibrary-9bd2c",
    storageBucket: "modernlibrary-9bd2c.appspot.com",
    messagingSenderId: "529839535757",
    appId: "1:529839535757:web:73a3a3d0b557462c1f94c4",
  };

  const app = initializeApp(firebaseConfig);
  let fileUploadTask: UploadTask;

  const uploadAction = () => {
    console.log("Upload started...");
    setUploadLink("");

    if (file) {
      const firebaseApp = getApp();
      const storage = getStorage();
      const storageRef = ref(storage, file[0].name);

      fileUploadTask = uploadBytesResumable(storageRef, file[0]);

      fileUploadTask.on(
        "state_changed",
        (snapshot) => {
          let pct = (snapshot.bytesTransferred / snapshot.totalBytes) * 100.0;
          setUploadMessage(pct.toFixed(0));
          switch (snapshot.state) {
            case "canceled":
              setUploadMessage("Upload cancelled");
          }
        },
        (error) => {
          console.log("Error while uploading " + error);
        },
        () => {
          console.log("File upload completed.");
          let url = getDownloadURL(storageRef)
            .then((link) => {
              setUploadLink(link);
            })
            .catch((error) => {
              console.log("Failed to get download link : " + error);
            });
        }
      );
    }
  };

  const cancelAction = () => {
    console.log("Upload cancelled." + fileUploadTask);
    fileUploadTask.cancel();
  };

  return (
    <div className="mainFileUploader">
      <input
        type="file"
        onChange={(e) => {
          if (e?.target?.files) {
            setFile(e.target.files);
          }
        }}
      />
      {uploadMessage && <p>Upload progress {uploadMessage} %</p>}
      {uploadLink && <a href={uploadLink}>File link</a>}

      <button onClick={uploadAction}>Upload</button>
      <button onClick={cancelAction}>Cancel</button>
    </div>
  );
}

export default FileUploader;
