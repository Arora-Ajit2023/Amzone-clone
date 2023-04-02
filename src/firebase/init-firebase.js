// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuGF8plyF9DV-t2lyFwlmUc_hEfeR4jmg",
  authDomain: "supershope-e503f.firebaseapp.com",
  projectId: "supershope-e503f",
  storageBucket: "supershope-e503f.appspot.com",
  messagingSenderId: "1003267048874",
  appId: "1:1003267048874:web:4b5c2cd5d321158a5497d3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firestore
export const db = getFirestore(app);
