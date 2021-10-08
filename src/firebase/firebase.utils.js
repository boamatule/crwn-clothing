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
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, AdditionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt, 
        ...AdditionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;