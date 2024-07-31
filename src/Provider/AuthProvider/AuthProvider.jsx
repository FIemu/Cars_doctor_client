import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../../Firebase/firebase.Config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const loginWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  const createUser = (email,password) => {
    return createUserWithEmailAndPassword(auth,email,password)
  };

  const userLogin =(email,password) =>{
    return signInWithEmailAndPassword(auth,email,password)
  }

  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser);
        setLoading(false)
    });
    return ()=>{
        return unSubscribe();
    }
  },[])

  const authInfo = {
    user,
    loading,
    loginWithGoogle,
    createUser,
    userLogin
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
