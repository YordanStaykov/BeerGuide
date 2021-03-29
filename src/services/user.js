import { saveUserData, clearUserData } from "../util";

import { auth } from '../config/firebase'

export async function registerUser(e, setError, history) {

    const email = e.target.email.value;
    const password = e.target.password.value;
    const repeatPassword = e.target.repeatPassword.value;

    if (password !== repeatPassword) {
        setError('Passwords should match!');
        deleteInputValues()
        return;
    }

    auth.createUserWithEmailAndPassword(email, password)
        .then(user => {
            saveUserData(user)
            history.push('/')
        })
        .catch(err => {
            setError(err.message)
            deleteInputValues()
        });

    function deleteInputValues() {
        e.target.email.value = ''
        e.target.password.value = ''
        e.target.repeatPassword.value = '';
    }
};

export async function loginUser(e, setError, history) {

    const email = e.target.email.value;
    const password = e.target.password.value;

    auth.signInWithEmailAndPassword(email, password)
        .then(user => {
            saveUserData(user);
            history.push('/')
        })
        .catch(err => {
            setError(err.message)
            deleteInputValues()
        })

    function deleteInputValues() {
        e.target.email.value = ''
        e.target.password.value = ''
    }
};

export async function logoutUser() {
    auth.signOut()
        .then(() => {
            clearUserData();
        })
}