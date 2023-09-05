import { getApp } from "firebase/app";
import { getStorage, ref, getDownloadURL, uploadString, uploadBytesResumable } from "firebase/storage";
import { initializeApp } from "firebase/app";
import * as fs from "node:fs";

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

// Get a non-default Storage bucket
const firebaseApp = getApp();
const storage = getStorage();
const storageRef = ref(storage, "TeamViewer_Setup_x64.exe");

const book2Bytes = fs.readFileSync("TeamViewer_Setup_x64.exe");

let uploadTask = uploadBytesResumable(storageRef, book2Bytes, { contentType: "application/exe", customMetadata: { ISBN: "12345" } });

uploadTask.on(
  "state_changed",
  (snapshot) => {
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log("Upload is " + progress.toFixed(2) + "% done");
    switch (snapshot.state) {
      case "paused":
        console.log("Upload is paused");
        break;
      case "running":
        console.log("Upload is running");
        break;
    }
  },
  (error) => {
    // Handle unsuccessful uploads
  },
  () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      console.log("File available at", downloadURL);
    });
  }
);

async function uploadFileToFirebase(file, storageRef) {}
