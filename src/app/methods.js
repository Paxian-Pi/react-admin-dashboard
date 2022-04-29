import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase/auth';

export const loginUser = (email, password, dispath) => {
    signInWithEmailAndPassword(auth, email, password)
    .then((res) => console.log(res.user))
    .catch(err => console.log(err))
}

export const registerUser = (email, password, dispath, navigate) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((res) => navigate('/'))
        .catch(err => console.log(err))
}