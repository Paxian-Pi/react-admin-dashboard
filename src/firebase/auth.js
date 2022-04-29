import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDtenm86Rdq2mWORxIKSavtmMxiSdrs0dI",
    authDomain: "react-admindashboard-77781.firebaseapp.com",
    databaseURL: "https://react-admindashboard-77781-default-rtdb.firebaseio.com",
    projectId: "react-admindashboard-77781",
    storageBucket: "react-admindashboard-77781.appspot.com",
    messagingSenderId: "803263309132",
    appId: "1:803263309132:web:37f84002e32dcbc2159be9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export default app