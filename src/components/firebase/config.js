import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'



const firebaseConfig = {
  apiKey: "AIzaSyDudKBADDK87JzIadUToLRoP2bWUS9C1CU",
  authDomain: "reactecommerce-c8f84.firebaseapp.com",
  projectId: "reactecommerce-c8f84",
  storageBucket: "reactecommerce-c8f84.appspot.com",
  messagingSenderId: "448651589142",
  appId: "1:448651589142:web:98f91f6347719404faa737",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)