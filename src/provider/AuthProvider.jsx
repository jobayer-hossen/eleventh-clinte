import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //  google login --
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    };

    // resister email and password --
    const createNewUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };
    //  login by email and password --
    const emailSignIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // logout use  --
    const logOutUser =()=>{
        return signOut(auth);
    }

    // user profile observe from firebase --
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unSubscribe();
        }
    }, []);


    const authInfo = {
        emailSignIn,
        logOutUser,
        user,
        loading,
        createNewUser,
        googleLogin,
    }
    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;