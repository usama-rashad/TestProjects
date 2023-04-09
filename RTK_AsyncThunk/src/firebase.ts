// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { doc, setDoc, addDoc, getFirestore, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMZiXeK2sl6T2gMGBf-e7DhKq6Rh6tJgs",
  authDomain: "tripplanner-373107.firebaseapp.com",
  databaseURL: "https://tripplanner-373107-default-rtdb.firebaseio.com",
  projectId: "tripplanner-373107",
  storageBucket: "tripplanner-373107.appspot.com",
  messagingSenderId: "788681908854",
  appId: "1:788681908854:web:8aba260f5ca259a69c3557",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

console.log(db);

async function addNewDoc(name: string, password: string) {
  return await addDoc(collection(db, "Users"), { name, password });
}

export { addNewDoc };
