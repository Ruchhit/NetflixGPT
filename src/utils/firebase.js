// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLp6uUXsJBnYOGCC7fr2uE6PXHZ7osqUk",
  authDomain: "netflixgpt-b1bf0.firebaseapp.com",
  projectId: "netflixgpt-b1bf0",
  storageBucket: "netflixgpt-b1bf0.appspot.com",
  messagingSenderId: "83424919009",
  appId: "1:83424919009:web:818cd930c887263934a6a0",
  measurementId: "G-4LNX4GD3GF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();