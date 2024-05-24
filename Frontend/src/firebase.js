// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-31ba9.firebaseapp.com",
  projectId: "mern-estate-31ba9",
  storageBucket: "mern-estate-31ba9.appspot.com",
  messagingSenderId: "1037116174796",
  appId: "1:1037116174796:web:d5ab80aa23d8b96b98ed69",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
