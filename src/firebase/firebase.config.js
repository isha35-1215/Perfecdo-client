// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvb2S4CIebNKs-H3azceY1SHHC1ROYg2o",
  authDomain: "task-management-eb24f.firebaseapp.com",
  projectId: "task-management-eb24f",
  storageBucket: "task-management-eb24f.appspot.com",
  messagingSenderId: "309454961009",
  appId: "1:309454961009:web:f5d8f350079664f4335ed0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;