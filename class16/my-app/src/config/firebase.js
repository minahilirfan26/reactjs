import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCFBj3ep7IuDugf6ZDaOCsT8nxXZAKOjSM",
  authDomain: "batch-16-cc593.firebaseapp.com",
  projectId: "batch-16-cc593",
  storageBucket: "batch-16-cc593.firebasestorage.app",
  messagingSenderId: "724933266729",
  appId: "1:724933266729:web:0a85c8717e28b29fbbbb38",
  measurementId: "G-1C98P7Q1X2"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut}