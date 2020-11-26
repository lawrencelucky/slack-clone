import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyD2MO0YGUPeUDWM4v8nEvPGPyClOROOePU',
  authDomain: 'slack-clone-bd3ae.firebaseapp.com',
  databaseURL: 'https://slack-clone-bd3ae.firebaseio.com',
  projectId: 'slack-clone-bd3ae',
  storageBucket: 'slack-clone-bd3ae.appspot.com',
  messagingSenderId: '833555702193',
  appId: '1:833555702193:web:27b361ee98360e4d98dd90',
  measurementId: 'G-X18PBQFJ64',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
