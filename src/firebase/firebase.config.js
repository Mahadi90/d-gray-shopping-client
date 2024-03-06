// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoqVpUwjOBrAgkKQsv2ymPN9yxtmZlNH0",
  authDomain: "d-gray-shopping.firebaseapp.com",
  projectId: "d-gray-shopping",
  storageBucket: "d-gray-shopping.appspot.com",
  messagingSenderId: "35848445609",
  appId: "1:35848445609:web:1897d9d82497984bf013b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;