import  firebase from "firebase";
import "firebase/auth";


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAFprZBnaQUVBwWqZlCY2Mog_TVuZoEzYI",
    authDomain: "ecommerce-68399.firebaseapp.com",
    projectId: "ecommerce-68399",
    storageBucket: "ecommerce-68399.appspot.com",
    messagingSenderId: "550085821349",
    appId: "1:550085821349:web:d5df7a06c9138eff66de4c"
  };
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
  

  //export
export const auth = firebase.auth();
//export const googleProvider = new firebase.auth.GoogleAuthProvider();
