import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signInWithRedirect, signOut, updateProfile} from 'firebase/auth'


export const AuthContext = createContext(app)
const auth = getAuth() 


const AuthProivder = ({children}) => {
    const googleAuth = new GoogleAuthProvider()

    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    const createUser = (email, password)=>{
       setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

const googleLogin = () => {
    setLoading(true)
    return signInWithPopup(auth, googleAuth)
}

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
          console.log('From auth state chnage', currentUser)
          setUser(currentUser)
          setLoading(false)
        })
        return () => {
            return unsubscribe()
        }
    },[])

    const updatenewProfile = (name) => {
        return updateProfile(auth.currentUser, {
           displayName : name
        })
    }

    const authInfo = {
        user,
        loading,
        createUser,
        login,
        googleLogin,
        logOut,
        updatenewProfile
    }

    return (
        <AuthContext.Provider value={authInfo}>
           {children} 
        </AuthContext.Provider>
    );
};

export default AuthProivder;