import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth'

let firebaseConfig = {
    apiKey: "AIzaSyAEnfWrkNqCjxk0aWgf9NM6NwhY_poQ-RE",
    authDomain: "fir-user-f31f8.firebaseapp.com",
    databaseURL: "https://fir-user-f31f8-default-rtdb.firebaseio.com",
    projectId: "fir-user-f31f8",
    storageBucket: "fir-user-f31f8.appspot.com",
    messagingSenderId: "620805808653",
    appId: "1:620805808653:web:b8801d5a57e8e055d5ab44",
    measurementId: "G-XGMXFS7VG7",
    useFirestoreForProfile: true
};

firebase.initializeApp(firebaseConfig);
// firebase.analytics();
firebase.firestore();
export default firebase;