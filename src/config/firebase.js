import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDITxNoe5VT3yDnmXvCtmhrKspLyARRSwc',
  authDomain: 'my-stock-info-9533a.firebaseapp.com',
  projectId: 'my-stock-info-9533a',
  storageBucket: 'my-stock-info-9533a.appspot.com',
  messagingSenderId: '360379201470',
  appId: '1:360379201470:web:4bf9b46008ca1845b02bef',
  measurementId: 'G-D42RJZ9VMM',
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
