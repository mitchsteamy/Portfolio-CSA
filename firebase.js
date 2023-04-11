// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOrw0tmqYJn8BSMEQmenEcMuBBqFQwpbE",
  authDomain: "portfolio-csa.firebaseapp.com",
  projectId: "portfolio-csa",
  storageBucket: "portfolio-csa.appspot.com",
  messagingSenderId: "297870152410",
  appId: "1:297870152410:web:5009bc59dedb887c88cbe3",
  measurementId: "G-NPH7JT6NTR"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);