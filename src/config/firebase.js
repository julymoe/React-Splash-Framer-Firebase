// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWaSpArrK__J6__eDmmCzM7KD73Jnkr3Y",
  authDomain: "react-unsplash-image.firebaseapp.com",
  projectId: "react-unsplash-image",
  storageBucket: "react-unsplash-image.appspot.com",
  messagingSenderId: "368700798209",
  appId: "1:368700798209:web:5c494cedcd70b508a31700"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)


///
// From Firebase 9 Auth Tutorial
export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function login(email, password) {
return signInWithEmailAndPassword(auth, email, password);
}

export function logout() {
return signOut(auth)
}