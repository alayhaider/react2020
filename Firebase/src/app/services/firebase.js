import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-firestore'
import 'firebase/firebase-database'

const config = {
  apiKey: "AIzaSyCguKjsEikH_kJ8wCkgWgOYPE2gmhStK5s",
  authDomain: "pia-sales.firebaseapp.com",
  databaseURL: "https://pia-sales.firebaseio.com",
  projectId: "pia-sales",
  storageBucket: "pia-sales.appspot.com",
  messagingSenderId: "999081295701",
  appId: "1:999081295701:web:412811b1d286d45669f9dc",
  measurementId: "G-C35MNL24SJ"
}

firebase.initializeApp(config);

export default firebase;
