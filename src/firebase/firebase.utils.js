
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

  export const createUserProfileDocument = async (userAuth, additionalData)=>{
      if(!userAuth) return;

      const userRef = firestore.doc(`users/${userAuth.uid}`)

      const spanShot =  await userRef.get()

      console.log(spanShot)

      if(!spanShot.exists){
          const {displayName, email} = userAuth;
          const createAt = new Date();

          try{
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additionalData
            })
          }catch(error){
              console.log('error ceating user',error.message)

          }
      }
      return userRef;
  }
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

