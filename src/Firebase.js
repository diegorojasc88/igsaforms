import firebase from 'firebase/app';
import 'firebase/firestore'

//La base de datos Cloud FIRESTORE se configuró en la región nam-5 (us-central)

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyBB4XbvBGxVab3d9Ug_cV13yE3d5MTxAlA",
    authDomain: "igsa-forms-backend.firebaseapp.com",
    projectId: "igsa-forms-backend",
    storageBucket: "igsa-forms-backend.appspot.com",
    messagingSenderId: "24258252245",
    appId: "1:24258252245:web:b5ab407c8827bdf9a1415c",
    measurementId: "G-E94T18E7BY"
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore();
