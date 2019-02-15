import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyB4O8IiRvBeXREP3-jS6EONUVNeiRWuzdM',
  authDomain: 'pick-me-up-6a75c.firebaseapp.com',
  databaseURL: 'https://pick-me-up-6a75c.firebaseio.com',
  projectId: 'pick-me-up-6a75c',
  storageBucket: 'pick-me-up-6a75c.appspot.com',
  messagingSenderId: '1044155933935'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const provider = new firebase.auth.FacebookAuthProvider();
export const firestore = firebase.firestore();
