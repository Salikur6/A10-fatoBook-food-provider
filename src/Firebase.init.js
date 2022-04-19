// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyADlnoDiLBV2PYILmGrC963s_6fbHPdFGY",
    authDomain: "fatobook-food-catering.firebaseapp.com",
    projectId: "fatobook-food-catering",
    storageBucket: "fatobook-food-catering.appspot.com",
    messagingSenderId: "24910140334",
    appId: "1:24910140334:web:fea0b619abdc1d9b876e3f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;