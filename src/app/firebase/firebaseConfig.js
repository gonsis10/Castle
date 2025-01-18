// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDjupNq5CYZVhitpRGvHVxE1GaX15e6xR8",
	authDomain: "castle-de289.firebaseapp.com",
	projectId: "castle-de289",
	storageBucket: "castle-de289.firebasestorage.app",
	messagingSenderId: "698080519093",
	appId: "1:698080519093:web:b60ac1472e1a88cdf1effc",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
export const auth = getAuth(app);
export const db = getFirestore(app);

// If you need a default export, export them all as named exports too
export default { app, auth, db };
