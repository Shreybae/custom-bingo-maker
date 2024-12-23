import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBUuhPui6jfjQnhc3-N9608kzrDTwJP4sk",
    authDomain: "phone-bingo.firebaseapp.com",
    projectId: "phone-bingo",
    storageBucket: "phone-bingo.firebasestorage.app",
    messagingSenderId: "240019434239",
    appId: "1:240019434239:web:4b754f4f647d08eff37aca",
    measurementId: "G-VDV06TKYC2"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app); 
  
  export default db;