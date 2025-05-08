// import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

// const firebaseConfig = {
//     apiKey: "AIzaSyBj2LdehAflJk8_Ip9BP9D3AI1IUpr1SRM",
//     authDomain: "student-dashboard-8ecc9.firebaseapp.com",
//     projectId: "student-dashboard-8ecc9",
//     storageBucket: "student-dashboard-8ecc9.firebasestorage.app",
//     messagingSenderId: "556867399882",
//     appId: "1:556867399882:web:bf901771650491a26a4433",
//     measurementId: "G-2CHLTDTJ84"
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const provider = new GoogleAuthProvider();

// export { auth, provider, signInWithPopup, signOut };



























import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  signOut,
  onAuthStateChanged
} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBj2LdehAflJk8_Ip9BP9D3AI1IUpr1SRM",
     authDomain: "student-dashboard-8ecc9.firebaseapp.com",
     projectId: "student-dashboard-8ecc9",
     storageBucket: "student-dashboard-8ecc9.firebasestorage.app",
     messagingSenderId: "556867399882",
    appId: "1:556867399882:web:bf901771650491a26a4433",
    measurementId: "G-2CHLTDTJ84"
  
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, signOut, onAuthStateChanged };