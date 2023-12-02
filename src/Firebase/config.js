import { initializeApp } from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyApishvDuPKJkGKZ3x-Ab2BlgK1m6BjLkM",
  authDomain: "olx-clone-2b838.firebaseapp.com",
  projectId: "olx-clone-2b838",
  storageBucket: "olx-clone-2b838.appspot.com",
  messagingSenderId: "32299775603",
  appId: "1:32299775603:web:1b53b4e57130507215dc06",
  measurementId: "G-Y6V6E4YQ9C"
};
// Initialize Firebase
export const firebase= initializeApp(firebaseConfig);


