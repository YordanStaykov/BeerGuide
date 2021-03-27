import style from './Register.module.scss';

import { Link } from 'react-router-dom'
import { useState } from 'react';

import { auth } from '../../config/firebase'

const Register = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRePassword] = useState('');

    function emailChangeHandler(e) {
        setEmail(e.target.value)
    }

    function passwordChangeHandler(e) {
        setPassword(e.target.value)
    }

    function repeatPasswordChangeHandler(e) {
        setRePassword(e.target.value)
    }

    function submitHandler(e) {
        e.preventDefault()

        if (password !== repeatPassword) {
            console.log('Something went wrong');
            return;
        }

        auth.createUserWithEmailAndPassword(email, password)
            .then(user => {
                console.log(user);
            })
            .catch(err => console.log(err));


    }

    return (
        <form onSubmit={submitHandler}>
            <div className={style.container}>
                <h1>Register</h1>
                <p>Please fill in this form to create an account.</p>
                <hr />

                <label htmlFor="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" id="email" required onChange={emailChangeHandler} />

                <label htmlFor="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" id="psw" required onChange={passwordChangeHandler} />

                <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
                <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required onChange={repeatPasswordChangeHandler} />
                <hr />

                <p>By creating an account you agree to our <a href="/">Terms & Privacy</a>.</p>
                <button type="submit" className={style.registerbtn}>Register</button>
            </div>

            <div className={`${style.container} ${style.signin}`}>
                <p>Already have an account? <Link to="/auth/login">Sign in</Link>.</p>
            </div>
        </form>
    );
};

export default Register;