// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { StorageError, FirebaseStorage, UploadTask, getDownloadURL, getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1hv_8s2x_efKyS9vnKq69fb3mfM4WPLg",
  authDomain: "testlaunch-18c4b.firebaseapp.com",
  projectId: "testlaunch-18c4b",
  storageBucket: "testlaunch-18c4b.appspot.com",
  messagingSenderId: "627820192234",
  appId: "1:627820192234:web:691c234309c5d97d97d293",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
