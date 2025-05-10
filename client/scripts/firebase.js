// Import Firebase modules
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js ';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js ';

// Your Firebase config (replace with your own)
const firebaseConfig = {
    apiKey: "AIzaSyBroj65waOVQ1UQOoo_8MjGszoOeEtneSs",
    authDomain: "medi-kit-23b58.firebaseapp.com",
    projectId: "medi-kit-23b58",
    storageBucket: "medi-kit-23b58.firebasestorage.app",
    messagingSenderId: "55643036059",
    appId: "1:55643036059:web:09b7026b220744b60be93e",
    measurementId: "G-8X0NW42QVH"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut };