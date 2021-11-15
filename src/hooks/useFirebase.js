import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile, signOut } from 'firebase/auth'
import { useEffect, useState } from 'react';
import initializeAuthentication from '../pages/Login/Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [admin, setAdmin] = useState(false);


    const auth = getAuth();
    const registerUser = (email, password, name, history) => {
        setIsLoading(true)
        if (password < 6) {
            setError('Password should be grater than 6 character')
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setError('');
                const newUser = { email, displayName: name }
                setUser(newUser);
                handleUserInfo(user.email, user.displayName);
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {

                }).catch((error) => {
                    // An error occurred
                    // ...
                });

                history.replace('/')
                console.log(email, password)
                console.log(user)
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false))

    }



    const loginUser = (email, password, location, history) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                
                    const destination = location?.start?.from || "/dashboard";
                    console.log(destination)
                    history.replace(destination);
              

            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false))
    }




    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
        }).catch((error) => {
        })
            .finally(() => setIsLoading(false))

    }



    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);

            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth])


    // check admin 
    useEffect(() => {
        const url = `https://powerful-ravine-08255.herokuapp.com/users/${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])




    // get users 
    const handleUserInfo = email => {
        fetch('https://powerful-ravine-08255.herokuapp.com/users', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ email }),
        })
            .then(res => res.json()
                .then(data => console.log(data))
            )

    }


    return {
        user,
        admin,
        error,
        registerUser,
        isLoading,
        loginUser,
        logOut

    }
};

export default useFirebase;