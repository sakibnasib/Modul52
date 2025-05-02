import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../fireBase/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";
 export const AuthContex =createContext();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
   const [loading,setLoading]=useState(true)
    const createUser = (email, password) =>{
   return createUserWithEmailAndPassword(auth,email, password)
    };
    const signIn=(email, password)=>{
return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut=()=>{
        return signOut(auth)
    };
    const updateUser=(updateData)=>{
        return updateProfile(auth.currentUser ,updateData)
    };
    const goggle=()=>{
        return signInWithPopup(auth,provider)
    };
    const ForgetPassword=(email)=>{
        return sendPasswordResetEmail(auth,email)
    }
    useEffect(()=>{
        const unsubscribe =onAuthStateChanged(auth,(currentUser) => {
            setUser(currentUser);
            setLoading(false);
          });
          return () => {
            unsubscribe();
          };
    },[])
    const authData={
createUser,
setUser,
user,
logOut,
signIn,
loading,
setLoading,
updateUser,
goggle,
ForgetPassword,
    }
    return <AuthContex value={authData}>{children}</AuthContex>;
};

export default AuthProvider;