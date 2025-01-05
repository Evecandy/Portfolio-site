// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
  apiKey: "AIzaSyA66JQyT8knerb3PDc8tufl4wf2IkbH5Jc",
  authDomain: "portfolio-site-86869.firebaseapp.com",
  projectId: "portfolio-site-86869",
  storageBucket: "portfolio-site-86869.firebasestorage.app",
  messagingSenderId: "701031734900",
  appId: "1:701031734900:web:ae51eaffbc75de3f9ffb21",
  measurementId: "G-SL8HB63FGH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//Initialize firestore
const db = getFirestore(app);

export default db ; //Export Firestore instance for use in other files