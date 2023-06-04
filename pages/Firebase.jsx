import firebase from 'firebase/app'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getStorage} from 'firebase/storage'
import 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRRWpMO4wAgmhehO0AyELBRg0_rRiCl5U",
  authDomain: "internship-task-06.firebaseapp.com",
  databaseURL: "https://internship-task-06-default-rtdb.firebaseio.com",
  projectId: "internship-task-06",
  storageBucket: "internship-task-06.appspot.com",
  messagingSenderId: "1012622808515",
  appId: "1:1012622808515:web:9ebfdb63887158d7c71976",
  measurementId: "G-WW2H3M48EG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app)

// added after
export const storage = getStorage(app);

export default Firebase;