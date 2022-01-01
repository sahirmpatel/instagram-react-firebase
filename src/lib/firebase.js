import Firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { seedDatabase } from "../seed.js";

const config = {
  apiKey: "AIzaSyByMO7g2X9Oyg_ZynAkqHEGovbudibL3zE",
  authDomain: "instagram-clone-a5fa7.firebaseapp.com",
  projectId: "instagram-clone-a5fa7",
  storageBucket: "instagram-clone-a5fa7.appspot.com",
  messagingSenderId: "813908746285",
  appId: "1:813908746285:web:1e05429ccc3c25e29358a4",
};

const firebase = Firebase.initializeApp(config);

const { FieldValue } = Firebase.firestore;

// here is where seed file will be called only once

export { firebase, FieldValue };
