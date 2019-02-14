import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyB4O8IiRvBeXREP3-jS6EONUVNeiRWuzdM',
  authDomain: 'pick-me-up-6a75c.firebaseapp.com',
  databaseURL: 'https://pick-me-up-6a75c.firebaseio.com',
  projectId: 'pick-me-up-6a75c',
  storageBucket: 'pick-me-up-6a75c.appspot.com',
  messagingSenderId: '1044155933935'
};

firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;
