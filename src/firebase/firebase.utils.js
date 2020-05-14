
  import firebase from "firebase/app"
  import 'firebase/firestore'
  import 'firebase/auth'
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDZ--eymte-pq3f1J2xu3yLsWcw2mCRPbE",
    authDomain: "shop-online-f55f7.firebaseapp.com",
    databaseURL: "https://shop-online-f55f7.firebaseio.com",
    projectId: "shop-online-f55f7",
    storageBucket: "shop-online-f55f7.appspot.com",
    messagingSenderId: "605439584565",
    appId: "1:605439584565:web:7cbfd9bbdcf27f581f847c",
    measurementId: "G-PYYFW3E4TL"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

