import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBs5lYTaRRPFtFgSct6kVdOhiFzWKHqIYU",
  authDomain: "hattl-waitlist.firebaseapp.com",
  projectId: "hattl-waitlist",
  storageBucket: "hattl-waitlist.appspot.com",
  messagingSenderId: "1007865695640",
  appId: "1:1007865695640:web:a3d5115ae4bc653100efed"
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);