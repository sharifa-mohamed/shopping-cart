import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAJ_-26gLdoyUshMDpVtmZx9bFNAJOd_p0",
  authDomain: "shopping-cart-app-a8bd0.firebaseapp.com",
  projectId: "shopping-cart-app-a8bd0",
  storageBucket: "shopping-cart-app-a8bd0.appspot.com",
  messagingSenderId: "676807198333",
  appId: "1:676807198333:web:e47027bba77c128e105314",
  measurementId: "G-YYEXC2DLY7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };