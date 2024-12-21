import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../../Firebase/Firebase.init";
import axios from "axios";

const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signinUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    //   console.log("state capture ", currentUser?.email);
      if (currentUser?.email) {
        const user = { email: currentUser.email };

        axios
          .post("https://job-portal-server-livid.vercel.app/jwt", user, { withCredentials: true })
          .then((res) => {
            // console.log("login token", res.data);
            setLoading(false);
          });
      } else {
        axios
          .post("https://job-portal-server-livid.vercel.app/logOut", {}, { withCredentials: true })
          .then((res) => {
            // console.log("logOut", res.data);
            setLoading(false); 
          });
      }
    });

    return () => {
      unsubcribe();
    };
  }, []);
  const authInfo = {
    user,
    loading,
    createUser,
    signinUser,
    signOutUser,
    signInWithGoogle,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
