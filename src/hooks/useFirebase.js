import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { useEffect, useState } from 'react';
import initializeAuthentication from '../pages/Login/Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const registerUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false))
        if (password < 6) {
            setError('password should be 6 characters');
        }
        console.log(email,password)

    }

    const loginUser = (email, password) => {
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
        setIsLoading(true);
        signOut(auth).then(() => {
        }).catch((error) => {
        })
            .finally(() => setIsLoading(false))

    }



    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false)

        })

        return () => unSubscribe;
    }, [])




    return {
        user,
        error,
        registerUser,
        isLoading,
        loginUser,
        logOut

    }
};

export default useFirebase;