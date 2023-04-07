// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMZiXeK2sl6T2gMGBf-e7DhKq6Rh6tJgs",
  authDomain: "tripplanner-373107.firebaseapp.com",
  projectId: "tripplanner-373107",
  storageBucket: "tripplanner-373107.appspot.com",
  messagingSenderId: "788681908854",
  appId: "1:788681908854:web:8aba260f5ca259a69c3557",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
