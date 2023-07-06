// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdO4TU_mAHpD7mHnf7R3J2Q0emUVtB1pw",
  authDomain: "whatschat-1a055.firebaseapp.com",
  projectId: "whatschat-1a055",
  storageBucket: "whatschat-1a055.appspot.com",
  messagingSenderId: "906561323791",
  appId: "1:906561323791:web:d4ca3160355143da32747a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
