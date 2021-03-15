import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyBJ5iu-E9l1_Zcj_nLCPThFKIr98-T7S0k",
  authDomain: "react-firebase-auth-b9d6b.firebaseapp.com",
  projectId: "react-firebase-auth-b9d6b",
  storageBucket: "react-firebase-auth-b9d6b.appspot.com",
  messagingSenderId: "210841744977",
  appId: "1:210841744977:web:f9634a7995f41ff9a86a70",
  measurementId: "G-BNY131FT5Q"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;