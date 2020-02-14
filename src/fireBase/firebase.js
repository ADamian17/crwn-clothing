import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/auth';


const config = {
  apiKey: "AIzaSyAQLKZi2YJMCwYBA68_g5WGZ5f51Zogh4o",
  authDomain: "crwn-db-f094f.firebaseapp.com",
  databaseURL: "https://crwn-db-f094f.firebaseio.com",
  projectId: "crwn-db-f094f",
  storageBucket: "crwn-db-f094f.appspot.com",
  messagingSenderId: "121923122399",
  appId: "1:121923122399:web:3dcf07fb949d88193f656a",
  measurementId: "G-MYXGPQWRFT"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;