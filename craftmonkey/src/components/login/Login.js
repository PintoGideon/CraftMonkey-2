import React, { useState } from 'react';
import FormInput from '../form-input/FormInput';
import Button from '../button/Button';
import './Login.scss';
import { connect } from 'react-redux';

import {
	googleSignInStart,
	emailSignInStart
} from '../../redux/user/userActions';

const Login = ({ emailSignInStart, googleSignInStart }) => {
	const [userCredentials, setCredentials] = useState({
		email: '',
		password: ''
	});

	const { email, password } = userCredentials;

	const handleSubmit = async event => {
		event.preventDefault();

		emailSignInStart(email, password);
	};

	const handleChange = event => {
		const { name, value } = event.target;

		setCredentials({ ...userCredentials, [name]: value });
	};

	return (
		<div className="sign-in">
			<h1>I already have an account</h1>
			<span>Sign in with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					name="email"
					type="email"
					handleChange={handleChange}
					value={email}
					label="email"
					required
				/>

				<FormInput
					name="password"
					type="password"
					handleChange={handleChange}
					value={password}
					label="password"
					required
				/>
				<div className="buttons">
					<Button type="submit">Sign In</Button>
					<Button type="button" onClick={googleSignInStart} isGoogleSignIn>
						Sign in with Google
					</Button>
				</div>
			</form>
		</div>
	);
};

const mapDispatchToProps = dispatch => ({
	googleSignInStart: () => dispatch(googleSignInStart()),
	emailSignInStart: (email, password) =>
		dispatch(
			emailSignInStart({
				email,
				password
			})
		)
});

export default connect(null, mapDispatchToProps)(Login);
