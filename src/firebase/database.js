import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDk-mvZ_FepmBg9t91muRkASWuIXlnvhMM",
  authDomain: "awd-vh.firebaseapp.com",
  projectId: "awd-vh",
  storageBucket: "awd-vh.appspot.com",
  messagingSenderId: "592262378665",
  appId: "1:592262378665:web:62e8d1363198f3449ea5b8",
  measurementId: "G-NBLMKGEH87"
};

  //initialize firebase
  firebase.initializeApp(firebaseConfig);
  const firebaseAuthentication = firebase.auth();
  const firebaseFireStore = firebase.firestore();

  export { firebaseAuthentication, firebaseFireStore, firebase};

