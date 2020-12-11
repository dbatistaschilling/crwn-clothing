import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBEexnvdYhGQ77fkQrexFuuFq9q7Vvl8LQ",
  authDomain: "crwn-db-dd837.firebaseapp.com",
  projectId: "crwn-db-dd837",
  storageBucket: "crwn-db-dd837.appspot.com",
  messagingSenderId: "963990920731",
  appId: "1:963990920731:web:4933c4d0ed18809d1022be",
  measurementId: "G-WBKQW9J5BS"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;
