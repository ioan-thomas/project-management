import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBt4b5vrFHUq6ljll3VJdckke9VM_D1iA4",
    authDomain: "project-management-site-7b055.firebaseapp.com",
    projectId: "project-management-site-7b055",
    storageBucket: "project-management-site-7b055.appspot.com",
    messagingSenderId: "993106811232",
    appId: "1:993106811232:web:84ccbd0308bab97ef76605"
  };

//   init firebase 
firebase.initializeApp(firebaseConfig);

// init services
export const projectFirestore = firebase.firestore();
export const projectAuth = firebase.auth();

export const timestamp = firebase.timestore.Timestamp;
