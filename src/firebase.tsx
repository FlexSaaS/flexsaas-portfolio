// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjT8kTfSbt5Thvqy9p0Gv_PBApWI2T8w4",
  authDomain: "flexsaas-portfolio.firebaseapp.com",
  projectId: "flexsaas-portfolio",
  storageBucket: "flexsaas-portfolio.firebasestorage.app",
  messagingSenderId: "747965679639",
  appId: "1:747965679639:web:5f29026f3da4a924dab452",
  measurementId: "G-R210FZT6VB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const initFirebase = () => {
  return app;
};
