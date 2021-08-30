import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAR_e64jgzYsvrtogkPwu7YTTRfNU38RLQ",
    authDomain: "crwn-db-ff8b4.firebaseapp.com",
    projectId: "crwn-db-ff8b4",
    storageBucket: "crwn-db-ff8b4.appspot.com",
    messagingSenderId: "1025027722180",
    appId: "1:1025027722180:web:44dd657de40cad1428b291",
    measurementId: "G-MPNM5TTH0M"
  };

  const app = initializeApp(firebaseConfig);
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });


  export const auth = getAuth();
  export const googleSignIn = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
  } 


  
  // export const googleSignIn =  signInWithPopup(auth, provider);
  export const firestore = getFirestore();