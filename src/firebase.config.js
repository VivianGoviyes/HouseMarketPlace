// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoqsahn4dbt6VDfVJ-d6lM8uW1OHYdwbw",
  authDomain: "house-market-f9742.firebaseapp.com",
  projectId: "house-market-f9742",
  storageBucket: "house-market-f9742.appspot.com",
  messagingSenderId: "733071575399",
  appId: "1:733071575399:web:514a44cf2ef372f10007c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();