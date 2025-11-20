// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOKhZ2YBushhWxXOLQg1g4X3Rb0bXAf_Q",
  authDomain: "dragon-news-b33e3.firebaseapp.com",
  projectId: "dragon-news-b33e3",
  storageBucket: "dragon-news-b33e3.firebasestorage.app",
  messagingSenderId: "110957366946",
  appId: "1:110957366946:web:a9beb2824aa9f21a6991fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;