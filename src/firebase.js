import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/analytics'
import 'firebase/storage'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBY7UpjUowjyVUpvXzBxeuvM2a7ahgposw",
    authDomain: "crud-into-firebase.firebaseapp.com",
    databaseURL: "https://crud-into-firebase.firebaseio.com",
    projectId: "crud-into-firebase",
    storageBucket: "crud-into-firebase.appspot.com",
    messagingSenderId: "397907174422",
    appId: "1:397907174422:web:2b0ff4d9a8e8ed06b60137",
    measurementId: "G-5GMG99SC7C"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  
  export default firebase