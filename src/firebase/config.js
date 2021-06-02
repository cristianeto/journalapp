import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAiMDuiZA2beb6DqjPIs3fdUekXkbq-xC8',
  authDomain: 'react-app-cris-udemy.firebaseapp.com',
  projectId: 'react-app-cris-udemy',
  storageBucket: 'react-app-cris-udemy.appspot.com',
  messagingSenderId: '574204931050',
  appId: '1:574204931050:web:1e9164021af5ea9036e093',
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
