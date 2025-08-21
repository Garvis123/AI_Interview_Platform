import { initializeApp ,getApp,getApps} from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvZASJcnNACyrfkpqJ_-p4toIlau6hj3Y",
  authDomain: "prepwise-83320.firebaseapp.com",
  projectId: "prepwise-83320",
  storageBucket: "prepwise-83320.firebasestorage.app",
  messagingSenderId: "197810152648",
  appId: "1:197810152648:web:878d6fceb30a476f2971fd",
  measurementId: "G-ZN03FVPKZK"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
