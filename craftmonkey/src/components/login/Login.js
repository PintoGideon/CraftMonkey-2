import React, { Component } from 'react';
import FormInput from '../form-input/FormInput';
import Button from '../button/Button';
import './Login.scss';
import { connect } from 'react-redux';

import {
	googleSignInStart,
	emailSignInStart
} from '../../redux/user/userActions';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	async handleSubmit(event) {
		const { emailSignInStart } = this.props;
		event.preventDefault();

		const { email, password } = this.state;

		emailSignInStart(email, password);
	}

	handleChange(event) {
		const { name, value } = event.target;

		this.setState({
			[name]: value
		});
	}

	render() {
		const { googleSignInStart } = this.props;
		return (
			<div className="sign-in">
				<h1>I already have an account</h1>
				<span>Sign in with your email and password</span>
				<form onSubmit={this.handleSubmit}>
					<FormInput
						name="email"
						type="email"
						handleChange={this.handleChange}
						value={this.state.email}
						label="email"
						required
					/>

					<FormInput
						name="password"
						type="password"
						handleChange={this.handleChange}
						value={this.state.password}
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
	}
}

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
