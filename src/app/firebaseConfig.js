// Import the functions you need from the SDKs you need
import { initializeApp , getApps, getApp } from "firebase/app";
import{ getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyANRzxfNbwadci2TqGvClIBWTYUoQPzWCQ",
  authDomain: "user-feedback-cbb4c.firebaseapp.com",
  projectId: "user-feedback-cbb4c",
  storageBucket: "user-feedback-cbb4c.appspot.com",
  messagingSenderId: "1057964067786",
  appId: "1:1057964067786:web:0d2871e1ad07bbeb60dd33",
  measurementId: "G-MDK6BVLCLG"
};

// Initialize Firebase
const app = !getApps().length? initializeApp(firebaseConfig):getApp();
const db = getFirestore(app);
const auth = getAuth(app);

export {db , auth};
