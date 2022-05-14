// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyeUw_UgNnz6_cDW3gtgburXx3FDlohKM",
  authDomain: "orpmt-270a7.firebaseapp.com",
  projectId: "orpmt-270a7",
  storageBucket: "orpmt-270a7.appspot.com",
  messagingSenderId: "394636537119",
  appId: "1:394636537119:web:e484e643cfbf48a251d42a",
  measurementId: "G-7DVCBRXKR7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
