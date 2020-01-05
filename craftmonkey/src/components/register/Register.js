import React, { Component } from 'react';
import FormInput from '../form-input/FormInput';
import Button from '../button/Button';
import './Register.scss';

import { connect } from 'react-redux';
import { signUpStart } from '../../redux/user/userActions';

class Register extends Component {
	constructor() {
		super();
		this.state = {
			displayName: '',
			email: '',
			password: '',
			confirmPassword: ''
		};
	}

	handleSubmit = async event => {
		const { signUpStart } = this.props;
		event.preventDefault();
		const { displayName, email, password, confirmPassword } = this.state;
		if (password !== confirmPassword) {
			alert("Passwords don't match");
			return;
		}
		signUpStart({
			displayName,
			email,
			password
		});
	};

	handleChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	render() {
		return (
			<div className="sign-up">
				<h2 className="title">I do not have an account</h2>
				<span>Sign up with email and password</span>
				<form className="sign-up-form" onSubmit={this.handleSubmit}>
					<FormInput
						type="text"
						name="displayName"
						value={this.state.displayName}
						onChange={this.handleChange}
						label="Username"
						required
					/>
					<FormInput
						type="email"
						name="email"
						value={this.state.email}
						onChange={this.handleChange}
						label="Email"
						required
					/>
					<FormInput
						type="password"
						name="password"
						value={this.state.password}
						onChange={this.handleChange}
						label="Password"
						required
					/>
					<FormInput
						type="password"
						name="confirmPassword"
						value={this.state.confirmPassword}
						onChange={this.handleChange}
						label="Confirm Password"
						required
					/>
					<Button type="submit">Sign in</Button>
				</form>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});

export default connect(null, mapDispatchToProps)(Register);
