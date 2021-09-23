import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAQLKZi2YJMCwYBA68_g5WGZ5f51Zogh4o",
  authDomain: "crwn-db-f094f.firebaseapp.com",
  databaseURL: "https://crwn-db-f094f.firebaseio.com",
  projectId: "crwn-db-f094f",
  storageBucket: "crwn-db-f094f.appspot.com",
  messagingSenderId: "121923122399",
  appId: "1:121923122399:web:3dcf07fb949d88193f656a",
  measurementId: "G-MYXGPQWRFT"
};

export const createUserProfileDocument = async ( userAuth, additionalData ) => {
  if ( !userAuth ) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get();

  if (!snapShot.exists ){
    const {displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch ( err ) {
      console.log('error creating user', err.message);  
    }
  }

  return userRef
};

export const addCollectionAndDocs = async (collectionKey, objsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj); 
  })

  return await batch.commit()
}

export const convertColectionsSnapsotToMap = (collections) => {
  const transformedCollection = collections.docs.map(doc => {
    const {title, items} = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  });

  return transformedCollection.reduce((acc, collection) => {
    acc[collection.title.toLowerCase()] = collection;

    return acc
  }, {});
} 

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      
      resolve(userAuth)
    }, reject)
  }); 
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export default firebase;