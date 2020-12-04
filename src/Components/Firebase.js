import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyD0CbmOuTCFDzPzZdujTrhzAw_2qa6hNaw",
    authDomain: "semocoder-2757d.firebaseapp.com",
    projectId: "semocoder-2757d",
    storageBucket: "semocoder-2757d.appspot.com",
    messagingSenderId: "883698690941",
    appId: "1:883698690941:web:64af02fc58a0210a6fba14",
    measurementId: "G-LFPJSV0QBM"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;