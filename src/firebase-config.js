import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAhlzwR_rzMGgmUfAwozVHVmIllR9LKbtA",
    authDomain: "react-todo-77506.firebaseapp.com",
    projectId: "react-todo-77506",
    storageBucket: "react-todo-77506.appspot.com",
    messagingSenderId: "1048448778657",
    appId: "1:1048448778657:web:0ceba935d3708cc811cbe0",
    measurementId: "G-CEEYC92HEP"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;