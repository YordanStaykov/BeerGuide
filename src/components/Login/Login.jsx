import style from './Login.module.scss'

import { useState, useContext } from 'react';

import { auth } from '../../config/firebase'

import { UserContext } from '../../contexts/UserContext'

const Login = ({
    history
}) => {
    const [error, setError] = useState('');
    const [user, setUser] = useContext(UserContext)


    function onLoginSubmitHandler(e) {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        auth.signInWithEmailAndPassword(email, password)
            .then(userData => {
                const { user: { email, uid } } = userData;
                sessionStorage.setItem('user', JSON.stringify({ email, uid }));
                setUser({ email, uid })
                history.push('/')
            })
            .catch(err => {
                setError(err.message)
                e.target.email.value = ''
                e.target.password.value = ''
            });

    }

    return (
        <form onSubmit={onLoginSubmitHandler}>
            <div className={style.container}>
                <span className={style.errorBox} >
                    {error ? error : ''}
                </span>
                <h1>Login</h1>
                <p>Please fill in this form to login to your account.</p>
                <hr />
                <label htmlFor="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Username" name="email" required />

                <label htmlFor="password"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="password" required />

                <hr />
                <button type="submit">Login</button>
            </div>
        </form>
    );
};

export default Login;