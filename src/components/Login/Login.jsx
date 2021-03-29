import style from './Login.module.scss'

import { useState } from 'react';

import { loginUser } from '../../services/user';

const Login = ({
    history
}) => {
    const [error, setError] = useState('');

    function onLoginSubmitHandler(e) {
        e.preventDefault();

        loginUser(e, setError, history)
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