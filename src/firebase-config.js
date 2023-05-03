// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpHTjf0nwA4rVDR0iFI0orEkctRtBEfZA",
  authDomain: "blogs-618f0.firebaseapp.com",
  projectId: "blogs-618f0",
  storageBucket: "blogs-618f0.appspot.com",
  messagingSenderId: "574576040433",
  appId: "1:574576040433:web:a0851449dbe054587dcc50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
