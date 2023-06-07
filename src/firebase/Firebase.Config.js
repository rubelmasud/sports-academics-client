// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: import.meta.env.VITE_apiKey,
//     authDomain: import.meta.env.VITE_authDomain,
//     projectId: import.meta.env.VITE_projectId,
//     storageBucket: import.meta.env.VITE_storageBucket,
//     messagingSenderId: import.meta.env.VITE_messagingSenderId,
//     appId: import.meta.env.VITE_appId
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export default app
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA4KwH0hqqPo99xKVnv4-nyajJetWxFaBw",
    authDomain: "sports-academies-fda20.firebaseapp.com",
    projectId: "sports-academies-fda20",
    storageBucket: "sports-academies-fda20.appspot.com",
    messagingSenderId: "1093171935645",
    appId: "1:1093171935645:web:72cbe7a26f4895de441774"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app