import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyClnbgzpeQ6wqgykmR-WE7Rxrs8OW-b_FU",
    authDomain: "crwn-db-68598.firebaseapp.com",
    databaseURL: "https://crwn-db-68598.firebaseio.com",
    projectId: "crwn-db-68598",
    storageBucket: "",
    messagingSenderId: "1095430907604",
    appId: "1:1095430907604:web:4f082b3d88f71550"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
      const{ displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        }) 
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }

    return userRef;
  };

firebase.initializeApp(config);

export const auth =  firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;