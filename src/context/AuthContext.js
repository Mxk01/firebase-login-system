import React, {
    createContext,
    useState,
    useContext,
    useEffect
} from 'react'

import firebase from '../firebase';
// create an authentication context
const AuthContext = createContext();

export function useAuth() {
    // returns the value of this context
    return useContext(AuthContext);
}


export function AuthProvider({ children }) {

    const [currentUser, setCurrentUser] = useState('');

    // register user
    function signup(email, password) {
        return firebase.auth.createUserWithEmailAndPassword(email, password)

    }
    let value = {
        currentUser, // this will be updated from state
        signup
    }

    // whenever user gets set firebase has a method of notifying
    // you about it
    useEffect(() => {
        const unsubscribe = firebase.auth.onAuthStateChanged(user => {
            setCurrentUser(user);
        })

        return unsubscribe;
    }, [])

    return (
        // value passed here is what's returned by useContext()
        // so the signup function and currentUser will be passed
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}


