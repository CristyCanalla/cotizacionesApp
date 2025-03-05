import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC-5vyOjg7KWL8ISW596etZjuKzVpnqOVs",
    authDomain: "cotizaciones-app-367ee.firebaseapp.com",
    projectId: "cotizaciones-app-367ee",
    storageBucket: "cotizaciones-app-367ee.firebasestorage.app",
    messagingSenderId: "645766044605",
    appId: "1:645766044605:web:bc9d2fd1e8d3c0ef1bd0d4"
  };
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, signOut };
