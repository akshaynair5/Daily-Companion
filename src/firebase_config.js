import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
import { getStorage, ref } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOFxf9HIbJJgCmILewl7G5_WQ1tzv4DWk",
  authDomain: "daily-companion-7a2df.firebaseapp.com",
  projectId: "daily-companion-7a2df",
  storageBucket: "daily-companion-7a2df.appspot.com",
  messagingSenderId: "621358946101",
  appId: "1:621358946101:web:74d8690459bcd1cf105e7c",
  measurementId: "G-2ZDQZ2ZC68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth()
export const storage = getStorage()
export const db = getFirestore(app);