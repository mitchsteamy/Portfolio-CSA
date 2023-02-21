// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDf0sMZ47GF_4l6cs1riGKH9jeX1P4s8m8",
  authDomain: "portfolio-cs3-c687a.firebaseapp.com",
  projectId: "portfolio-cs3-c687a",
  storageBucket: "portfolio-cs3-c687a.appspot.com",
  messagingSenderId: "348765787645",
  appId: "1:348765787645:web:dd625b73b7701dee0c3594",
  measurementId: "G-MR3F787PR6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);