import { getAuth,onAuthStateChanged, createUserWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react';
import initializeAuthentication from '../pages/Login/Firebase/firebase.init';
initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState([]);
    const [error, setError] = useState('');

    const auth = getAuth();
    const handleRegisterUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
            })
            .catch((error) => {
                setError(error.message);

            });

    }

    return {
        user,
        error,
        handleRegisterUser,
        
    }
};

export default useFirebase;