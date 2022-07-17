import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyBflMlA5aRdmV-TeW996KVeuN1rGEWMz90',
  authDomain: 'auth-development-78f36.firebaseapp.com',
  projectId: 'auth-development-78f36',
  storageBucket: 'auth-development-78f36.appspot.com',
  messagingSenderId: '404879897055',
  appId: '1:404879897055:web:9ac74bfd8bf7801491546a',
});

export const auth = app.auth();
export default app;
