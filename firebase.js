import * as firebase from 'firebase';


var firebaseConfig = {
    apiKey: "AIzaSyDQP3vzpel8Uc-uKipNBLjG18W2Rr02YM8",
    authDomain: "reunionapp-7ffc4.firebaseapp.com",
    databaseURL: "https://reunionapp-7ffc4.firebaseio.com",
    projectId: "reunionapp-7ffc4",
    storageBucket: "reunionapp-7ffc4.appspot.com",
    messagingSenderId: "834275098745",
    appId: "1:834275098745:web:2f1c4e7245ae6ba74b94a8",
    measurementId: "G-Z2YMCL9YK6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase