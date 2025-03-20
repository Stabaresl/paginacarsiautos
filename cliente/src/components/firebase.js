import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "carsiautos.firebaseapp.com",
  projectId: "carsiautos",
  storageBucket: "carsiautos.appspot.com",
  messagingSenderId: "1042923971673",
  appId: "1:1042923971673:web:bbaac084358b7589a17d48",
  measurementId: "G-3BD8M8R3JX"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider, signInWithPopup, signOut, collection, addDoc, getDocs, deleteDoc, doc };
