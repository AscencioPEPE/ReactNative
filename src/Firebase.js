import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQp7Oq3ncyKWMuaey775FaTh0jQnwKIO4",
  authDomain: "aniversario-60060.firebaseapp.com",
  projectId: "aniversario-60060",
  storageBucket: "aniversario-60060.appspot.com",
  messagingSenderId: "1021711490171",
  appId: "1:1021711490171:web:38773107ddbfa5952e96de",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export default {
  firebase,
  db,
};
