// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBD81xn_MrEC6g2w6kETT3OFeKAvFSa790',
  authDomain: 'email-authentication-practice.firebaseapp.com',
  projectId: 'email-authentication-practice',
  storageBucket: 'email-authentication-practice.appspot.com',
  messagingSenderId: '559535663998',
  appId: '1:559535663998:web:c62c83df864e3bdf40a12f',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
