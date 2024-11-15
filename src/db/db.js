import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCJnkrR-B10y5yGt5tNolArA11qBXO535s",
  authDomain: "ecommerce-roless.firebaseapp.com",
  projectId: "ecommerce-roless",
  storageBucket: "ecommerce-roless.firebasestorage.app",
  messagingSenderId: "99403050949",
  appId: "1:99403050949:web:176473a681f152eff3e5ac"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore()

export default db