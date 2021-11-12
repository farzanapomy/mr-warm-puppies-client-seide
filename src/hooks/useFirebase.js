import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signOut } from 'firebase/auth'
import { useState, useEffect } from 'react';
import initializeAuthentication from '../pages/Login/Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true)

    const auth = getAuth();

   const registerUser = (email, password) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user)
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false))
    }


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
        handleRegisterUser,
        logOut

    }
};

export default useFirebase;