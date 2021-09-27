import { initializeApp, } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC9Z8vvVBG_zQgOusxSJO-jc31z-P2pLdo",
    authDomain: "omerzweb.firebaseapp.com",
    databaseURL: "https://omerzweb-default-rtdb.firebaseio.com",
    projectId: "omerzweb",
    storageBucket: "omerzweb.appspot.com",
    messagingSenderId: "131451588005",
    appId: "1:131451588005:web:b95a940ecdd996e0376c4c"
};

initializeApp(firebaseConfig)

const auth = getAuth();

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged };