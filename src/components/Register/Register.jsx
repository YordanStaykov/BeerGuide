import style from "./Register.module.scss";

import { Link } from "react-router-dom";
import { useState } from "react";

import { auth } from "../../config/firebase";

export default function Register({ history }) {
	const [error, setError] = useState("");

	function onRegisterSubmitHandler(e) {
		e.preventDefault();

		const email = e.target.email.value;
		const password = e.target.password.value;
		const repeatPassword = e.target.repeatPassword.value;

		if (password !== repeatPassword) {
			setError("Passwords should match!");
			e.target.password.value = "";
			e.target.repeatPassword.value = "";
			return;
		}

		auth.createUserWithEmailAndPassword(email, password)
			.then(() => {
				history.push("/recipes");
			})
			.catch((err) => {
				setError(err.message);
				e.target.email.value = "";
				e.target.password.value = "";
				e.target.repeatPassword.value = "";
			});
	}

	return (
		<form onSubmit={onRegisterSubmitHandler}>
			<div className={style.container}>
				<span className={style.errorBox}>{error ? error : ""}</span>
				<h1>Register</h1>
				<p>Please fill in this form to create an account.</p>
				<hr />

				<label htmlFor="email">
					<b>Email</b>
				</label>
				<input
					type="text"
					placeholder="Enter Email"
					name="email"
					id="email"
					required
				/>

				<label htmlFor="password">
					<b>Password</b>
				</label>
				<input
					type="password"
					placeholder="Enter Password"
					name="password"
					id="password"
					required
				/>

				<label htmlFor="repeatPassword">
					<b>Repeat Password</b>
				</label>
				<input
					type="password"
					placeholder="Repeat Password"
					name="repeatPassword"
					id="repeatPassword"
				/>
				<hr />

				<p>
					By creating an account you agree to our{" "}
					<a href="/">Terms & Privacy</a>.
				</p>
				<button type="submit" className={style.registerbtn}>
					Register
				</button>

				<div className={`${style.container} ${style.signin}`}>
					<p>
						Already have an account?{" "}
						<Link to="/auth/login">Sign in</Link>.
					</p>
				</div>
			</div>
		</form>
	);
}
