// src/firebase.tsx
import { initializeApp, type FirebaseApp } from "firebase/app";
import { getAuth, type Auth, signInAnonymously } from "firebase/auth";
import { getFirestore, Firestore } from "firebase/firestore";
import { getFunctions, type Functions } from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyDjT8kTfSbt5Thvqy9p0Gv_PBApWI2T8w4",
  authDomain: "flexsaas-portfolio.firebaseapp.com",
  projectId: "flexsaas-portfolio",
  storageBucket: "flexsaas-portfolio.firebasestorage.app",
  messagingSenderId: "747965679639",
  appId: "1:747965679639:web:5f29026f3da4a924dab452",
  measurementId: "G-R210FZT6VB",
};

const app: FirebaseApp = initializeApp(firebaseConfig);

export const auth: Auth = getAuth(app);
export const db: Firestore = getFirestore(app);
export const functions: Functions = getFunctions(app, "europe-west2");
export { signInAnonymously };
