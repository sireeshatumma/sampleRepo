import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
 
    apiKey: "AIzaSyBM0eh6lYtYl9wdXXZo8CsoErQqxqoKqMk",
    authDomain: "wily-dda6a.firebaseapp.com",
    databaseURL: "https://wily-dda6a.firebaseio.com",
    projectId: "wily-dda6a",
    storageBucket: "wily-dda6a.appspot.com",
    messagingSenderId: "201314742891",
    appId: "1:201314742891:web:567eeba9da746013e9772e"
  };
  // Initialize Firebase
  if(!firebase.apps.length)
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();