import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBeliybzoxRuvo0y9aUBhetSTEXJRDsSNQ",
  authDomain: "crwn-clothing-62c4f.firebaseapp.com",
  databaseURL: "https://crwn-clothing-62c4f.firebaseio.com",
  projectId: "crwn-clothing-62c4f",
  storageBucket: "crwn-clothing-62c4f.appspot.com",
  messagingSenderId: "319626311876",
  appId: "1:319626311876:web:95c1f1a3b71d2ffb99f191",
  measurementId: "G-CPSSDFJC8W",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating user", error);
    }
  }

  return userRef;
};

export default firebase;
