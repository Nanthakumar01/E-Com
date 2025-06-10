import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCODwTKvPHYFuy7g4xQ8fhcnch1Wz0jujc",
  authDomain: "e-com-89bf6.firebaseapp.com",
  projectId: "e-com-89bf6",
  storageBucket: "e-com-89bf6.firebasestorage.app",
  messagingSenderId: "434419987054",
  appId: "1:434419987054:web:3166b350b9cbe45e70ac7f",
  measurementId: "G-0NL0B412P9"
};

const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { auth, db };