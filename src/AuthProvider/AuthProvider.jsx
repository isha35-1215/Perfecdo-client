import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    
    const auth = getAuth(app);

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const updateUser = (displayName, photoURL) => {
        return updateProfile(auth.currentUser, {
          displayName,
          photoURL,
        })
          .then(() => {
            setUser(auth.currentUser);
          })
          .catch((error) => {
            console.error("Error updating profile:", error);
          });
      };

    const signIn = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const logOut=()=>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("User in the auth state changed", currentUser);

            setUser(currentUser);
            setLoading(false);

           
        });

        return () => {
            unSubscribe();
        };
        
    }, []);

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        updateUser
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;