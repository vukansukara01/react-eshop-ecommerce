import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDfNDqC53hmbHKvffo-TDpPdR7j5vTmC-g",
  authDomain: "eshop-5d616.firebaseapp.com",
  projectId: "eshop-5d616",
  storageBucket: "eshop-5d616.appspot.com",
  messagingSenderId: "520059628103",
  appId: "1:520059628103:web:4ded9582d92a6020681f62",
  measurementId: "G-G6DW6FBC5D",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

const db = firebase.firestore();
export const auth = firebase.auth;
export const storage = firebase.storage();
export default db;
