import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
  
const firebaseConfig = {
    apiKey: "AIzaSyDuVR6h6RZHlUvkATv9Et5VGiWmpWWRXo4",
  authDomain: "stack-overflow-clone-6b595.firebaseapp.com",
  projectId: "stack-overflow-clone-6b595",
  storageBucket: "stack-overflow-clone-6b595.appspot.com",
  messagingSenderId: "247133832463",
  appId: "1:247133832463:web:f4894d97015beb8c15aa7a",
  measurementId: "G-VFJ0XXH153"
};
    
firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
export {auth , firebase};