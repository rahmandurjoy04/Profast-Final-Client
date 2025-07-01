import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../../Firebase/firebase.init';
const googleProvider = new GoogleAuthProvider()
const AuthProvider = ({ children }) => {
    // Setting up  the states
    const [user, setUser] = useState(null);
    const [authLoading, setAuthLoading] = useState(true);

    // User Creation using email & password
    const createUser = (email, password) => {
        setAuthLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    };

    // signin using email and password 
    const signIn = (email, password) => {
        setAuthLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // SignIn with Google Popup
    const signInWithGoogle = ()=>{
        setAuthLoading(true);
        return signInWithPopup(auth,googleProvider)
    }

    // Logging the user out
    const logOut = () => {
        setAuthLoading(true);
        return signOut(auth);
    };

    // Setting up an observer
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setAuthLoading(false);
        });

        return () => {
            unSubscribe();
        }
    }, [])
    const authInfo = {
        createUser,
        signIn,
        user,
        authLoading,
        setAuthLoading,
        logOut,
        signInWithGoogle
    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;