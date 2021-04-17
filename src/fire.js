 //Initialise firebase
import firebase from 'firebase';
//code from firebase.com
var firebaseConfig = {
    apiKey: "AIzaSyD3QqIUw2vjGCA3obhSDjQTXHd3ZTvn_A0",
    authDomain: "login-960d1.firebaseapp.com",
    projectId: "login-960d1",
    storageBucket: "login-960d1.appspot.com",
    messagingSenderId: "113419152144",
    appId: "1:113419152144:web:6109a07a8c16cae10d9395"
  };
  // Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;    


