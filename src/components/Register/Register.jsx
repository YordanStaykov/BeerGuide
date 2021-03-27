import style from './Register.module.scss';
import { Link } from 'react-router-dom'

const Register = (props) => {
    function something(e) {
        e.preventDefault()
        console.log('something');
    }

    return (
        <form onSubmit={something}>
            <div className={style.container}>
                <h1>Register</h1>
                <p>Please fill in this form to create an account.</p>
                <hr />

                <label htmlFor="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" id="email" required />

                <label htmlFor="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" id="psw" required />

                <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
                <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required />
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