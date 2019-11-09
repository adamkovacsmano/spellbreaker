import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAEQ8-pWLrruQ_wrGFUZCe8oXcD_5uhJF8",
  authDomain: "spellbreaker-34b70.firebaseapp.com",
  databaseURL: "https://spellbreaker-34b70.firebaseio.com",
  projectId: "spellbreaker-34b70",
  storageBucket: "spellbreaker-34b70.appspot.com",
  messagingSenderId: "253256177160",
  appId: "1:253256177160:web:f37a44708c370857fc63bd",
  measurementId: "G-SW47EHJH0V"
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export default firebase;
