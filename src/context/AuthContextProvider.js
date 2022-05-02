import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '../firebase/auth';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getErrors } from "../features/errorSlice";

const authContext = createContext()

export function AuthContextProvider({ children }) {

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const [user, setUser] = useState('')

    // Create methods here
    const login = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(() => navigate('/dashboard'))
            .catch(err => dispatch(getErrors(err.message)))
    }

    const signup = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => navigate('/'))
            .catch(err => dispatch(getErrors(err.message)))
    }

    const logout = () => {
        signOut(auth)
    }

    const googleSignIn = () => {
        const googleAuthProvider = new GoogleAuthProvider()
        signInWithPopup(auth, googleAuthProvider)
            .then(() => navigate('/dashboard'))
            .catch(err => dispatch(getErrors(err.message)))
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (userCurrent) => {
            setUser(userCurrent)
            unsubscribe()
        })

        // return () => {
        //     unsubscribe()
        //     console.log('Unsubscribed')
        // }
    }, [])

    return <authContext.Provider value={{ user, login, signup, logout, googleSignIn }}>{children}</authContext.Provider>
}

export function useAuth() {
    return useContext(authContext)
}