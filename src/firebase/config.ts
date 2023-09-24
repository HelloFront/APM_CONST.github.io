import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAO9TowX6zXTBBvDcCx5i8TQPNzhswU7xI",
  authDomain: "apm-construction.firebaseapp.com",
  databaseURL: "https://apm-construction-default-rtdb.firebaseio.com",
  projectId: "apm-construction",
  storageBucket: "apm-construction.appspot.com",
  messagingSenderId: "68446230885",
  appId: "1:68446230885:web:0c4b86960a7b5643c2698c",
  measurementId: "G-Z6PDN60LDF",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)