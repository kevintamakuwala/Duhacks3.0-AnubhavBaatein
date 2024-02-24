import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB9U5wB6IATdCObQ1k4isgetS64vX94Mjo",
  authDomain: "alumni-portal-ddu.firebaseapp.com",
  projectId: "alumni-portal-ddu",
  storageBucket: "alumni-portal-ddu.appspot.com",
  messagingSenderId: "1039497170175",
  appId: "1:1039497170175:web:7da66830bc5d9ccb7710ca",
  measurementId: "G-MFRZK022KD"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);