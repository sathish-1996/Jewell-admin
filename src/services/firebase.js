import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
// here attach your firebase configuration 
const firebaseConfig = {
    apiKey: "AIzaSyBj7EB-KWY_JDuVvtkrX31CrT4mO-8iKNU",
    authDomain: "jewellery-cfc4f.firebaseapp.com",
    projectId: "jewellery-cfc4f",
    storageBucket: "jewellery-cfc4f.firebasestorage.com",
    messagingSenderId: "123456",
    appId: "1:736985722232:web:98168642d75fa6cf45ec8d",
    measurementId: "G-VLKWJ1EPQ0"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// if (window.location.hostname === "localhost") {
//     auth.settings.appVerificationDisabledForTesting = true;
// }
export { auth, RecaptchaVerifier, signInWithPhoneNumber };