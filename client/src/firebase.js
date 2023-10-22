// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "kyivestate-4fe80.firebaseapp.com",
  projectId: "kyivestate-4fe80",
  storageBucket: "kyivestate-4fe80.appspot.com",
  messagingSenderId: "1092750708241",
  appId: "1:1092750708241:web:b0e4a71ecb7b91c0e76bb0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
