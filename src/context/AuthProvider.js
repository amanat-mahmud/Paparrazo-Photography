import React, { useContext, useEffect, useState } from 'react';
import app from "../config/firebase.config"
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const AuthContext = useContext()
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const createUser = (email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const logIn = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    const loginGoogle = ()=>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider);
    }
    const logOut = ()=>{;
        return signOut(auth);
    }
    useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false);
        });

        return () =>{
            return unsubscribe();
        }
    }, [])
    const authInfo = {user,createUser,logIn,loginGoogle,logOut}
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;