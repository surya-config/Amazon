import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBA8oHd-x5i1E1B-veCeKaoKbx_WCHqa-w",
  authDomain: "fir-58d98.firebaseapp.com",
  databaseURL: "https://fir-58d98.firebaseio.com",
  projectId: "fir-58d98",
  storageBucket: "fir-58d98.appspot.com",
  messagingSenderId: "383271492301",
  appId: "1:383271492301:web:3e4f0b7a38036ea7182784",
  measurementId: "G-G419QGWDDV",
});

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
