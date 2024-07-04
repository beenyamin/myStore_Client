// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyg8Gq4J19-O2OSrxt92CxtkfV7ZxETWw",
  authDomain: "mystore-24.firebaseapp.com",
  projectId: "mystore-24",
  storageBucket: "mystore-24.appspot.com",
  messagingSenderId: "268783225314",
  appId: "1:268783225314:web:dd2a754774209870fa51bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth ;