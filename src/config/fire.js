import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyATGo1JiE5Q1UCeqaTy5IOrtzDPB-w5LCw",
  authDomain: "project1-1aecb.firebaseapp.com",
  projectId: "project1-1aecb",
  storageBucket: "project1-1aecb.appspot.com",
  messagingSenderId: "191256622367",
  appId: "1:191256622367:web:fdfa500c9e722e37d2ec2a",
  measurementId: "G-P0M10TWXR8"
};
// Initialize Firebase


const fire = firebase.initializeApp(firebaseConfig);

export default fire;