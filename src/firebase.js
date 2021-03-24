import firebase from 'firebase';
//import { db } from 'firebase';

const firebaseConfig = {
  apiKey: "add your own key here",
  authDomain: "",
  projectId: "",
  storageBucket: "final-project-c1dac.appspot.com",
  messagingSenderId: "",
  appId: "1:10682e322ea"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth}
export default db;
