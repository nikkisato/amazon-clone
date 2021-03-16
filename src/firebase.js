import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAQbGKPjs7J5cCJUFQ8rAoihMPi0iiTBwk',
  authDomain: 'clone-edb04.firebaseapp.com',
  projectId: 'clone-edb04',
  storageBucket: 'clone-edb04.appspot.com',
  messagingSenderId: '89513122162',
  appId: '1:89513122162:web:2de371ab2943da7b32a5eb',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
