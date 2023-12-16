// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDX0k3TaHk3oN3Xm4xpGVWMKc_M5arChaU",
  authDomain: "netflixgpt-c63ab.firebaseapp.com",
  projectId: "netflixgpt-c63ab",
  storageBucket: "netflixgpt-c63ab.appspot.com",
  messagingSenderId: "799709840012",
  appId: "1:799709840012:web:537139ee48627c0e3a31a9",
  measurementId: "G-FL12X5NK23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);