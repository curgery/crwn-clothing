import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import collectionItemComponent from '../components/collection-item/collection-item.component';

const config = {
    apiKey: "AIzaSyClnbgzpeQ6wqgykmR-WE7Rxrs8OW-b_FU",
    authDomain: "crwn-db-68598.firebaseapp.com",
    databaseURL: "https://crwn-db-68598.firebaseio.com",
    projectId: "crwn-db-68598",
    storageBucket: "",
    messagingSenderId: "1095430907604",
    appId: "1:1095430907604:web:4f082b3d88f71550"
  };

  firebase.initializeApp(config);


  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    console.log(userRef)

    const snapShot = await userRef.get();
    console.log(snapShot.data());

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

  export const addCollectionAndDocuments = async (
    collectionKey,
    objectsToAdd
    ) => {
    const collectionRef = firestore.collection(collectionKey);
    console.log(collectionRef)
  }

  export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
      const { title, items } = doc.data();

      return {
        routeName: encodeURI(title.toLowerCase()),
        id: doc.id,
        title,
        items
      }
    });

    return transformedCollection.reduce((accumulator, collection) => {
      accumulator[collection.title.toLowerCase()] = collection;
      return accumulator;
    }, {})

  }


export const auth =  firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;