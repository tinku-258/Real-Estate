// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-59fcf.firebaseapp.com",
  projectId: "real-estate-59fcf",
  storageBucket: "real-estate-59fcf.appspot.com",
  messagingSenderId: "957637778085",
  appId: "1:957637778085:web:559be03d567cde07e00b4c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
