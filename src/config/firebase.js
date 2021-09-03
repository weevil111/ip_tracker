import firebase from "firebase"
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "iptracker-34f53.firebaseapp.com",
  projectId: "iptracker-34f53",
  storageBucket: "iptracker-34f53.appspot.com",
  messagingSenderId: "557952469184",
  appId: "1:557952469184:web:4b6119bbb8036cd0ee8525"
};

let firebaseApp = firebase.initializeApp(firebaseConfig);
let firebaseDB = firebaseApp.firestore();

export { firebaseDB }