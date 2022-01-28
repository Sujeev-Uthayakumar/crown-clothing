import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyD2BgKL64ZSevqjfN4fZkD50GStHNQCxNs",
  authDomain: "crwn-db-1dee4.firebaseapp.com",
  projectId: "crwn-db-1dee4",
  storageBucket: "crwn-db-1dee4.appspot.com",
  messagingSenderId: "385737568993",
  appId: "1:385737568993:web:ea98aa30272b54d0757da0",
  measurementId: "G-YL2FR4C0T8",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
