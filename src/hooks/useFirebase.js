import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { useState, useEffect } from 'react';
import initializeAuthentication from '../pages/Login/Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);



    const auth = getAuth();
    const registerUser = (name, email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false))
    }


    const loginUser = (email,password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });

    }



    const logOut = () => {

        signOut(auth).then(() => {
        }).catch((error) => {
            setError(error.message)
        });
    }


    // check users 

    useEffect(() => {
        const unSubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unSubscribed;
    }, [])


    return {
        user,
        error,
        isLoading,
        registerUser,
        loginUser,
        logOut

    }
};

export default useFirebase;