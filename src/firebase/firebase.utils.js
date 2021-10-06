import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyDFt9gwB-QF9utSnMeTgzD0Z8-OwdyL-gQ",
  authDomain: "crwn-clothing-db-2d1fd.firebaseapp.com",
  projectId: "crwn-clothing-db-2d1fd",
  storageBucket: "crwn-clothing-db-2d1fd.appspot.com",
  messagingSenderId: "182925350707",
  appId: "1:182925350707:web:8a5f4a266e61313b43d046",
  measurementId: "G-7YD5223TW3"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_acount' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;