// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAreZOJIPcvXD30GT6J5Hsckopmz2RDfW8",
  authDomain: "netflixclone-9d310.firebaseapp.com",
  projectId: "netflixclone-9d310",
  storageBucket: "netflixclone-9d310.firebasestorage.app",
  messagingSenderId: "612194208134",
  appId: "1:612194208134:web:cbe08eb0e7d4a7f5f38407",
  measurementId: "G-WWXZ5G839H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
