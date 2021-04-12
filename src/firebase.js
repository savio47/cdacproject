import firebase from 'firebase';
import "firebase/auth";
//import { db } from 'firebase';

const firebaseConfig = {
  apiKey: "Enter_your_firebase_key",
  authDomain: "final-project-c1dac.firebaseapp.com",
  projectId: "final-project-c1dac",
  storageBucket: "final-project-c1dac.appspot.com",
  messagingSenderId: "1069810894175",
  appId: "1:1069810894175:web:d4fcf9a391801e82e322ea"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth}
export default db;
