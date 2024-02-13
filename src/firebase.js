import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCy_VSIoc2aPORynnBDIEZbBwb0BqpMGwU",
  authDomain: "react-todo-d3101.firebaseapp.com",
  projectId: "react-todo-d3101",
  storageBucket: "react-todo-d3101.appspot.com",
  messagingSenderId: "966237487224",
  appId: "1:966237487224:web:c3e4b8f94d12c7f79bad8d",
  measurementId: "G-3Y5DV65KV7",
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
