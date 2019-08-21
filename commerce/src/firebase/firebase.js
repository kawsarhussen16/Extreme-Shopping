import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCstkparUPdPZuSMHuIbLdgPy_UQEjN99w",
  authDomain: "ecommerse-1463d.firebaseapp.com",
  databaseURL: "https://ecommerse-1463d.firebaseio.com",
  projectId: "ecommerse-1463d",
  storageBucket: "",
  messagingSenderId: "532521673783",
  appId: "1:532521673783:web:616c48263babf778"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const GoogleLogin = () => auth.signInWithPopup(provider);

export default firebase;
