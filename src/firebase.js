import firebase from 'firebase';


const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyCsaT3wXppQnFo9jZ0lKM1tCJx4wImpwCY",
    authDomain: "chat-app-46c83.firebaseapp.com",
    projectId: "chat-app-46c83",
    storageBucket: "chat-app-46c83.appspot.com",
    messagingSenderId: "1076208013817",
    appId: "1:1076208013817:web:989adfafe08185d03fad28"
  });

  const db =firebaseApp.firestore();

  export  default db;