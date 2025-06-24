// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaUQWR6co-Wi5qkytKPs5zUHVaVbtwIzY",
  authDomain: "email-password-auth-d797a.firebaseapp.com",
  projectId: "email-password-auth-d797a",
  storageBucket: "email-password-auth-d797a.firebasestorage.app",
  messagingSenderId: "421563511850",
  appId: "1:421563511850:web:a3eb3fd033fa161e21bf53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);