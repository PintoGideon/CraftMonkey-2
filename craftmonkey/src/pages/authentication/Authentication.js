import React, { Component } from 'react';
import './Authentication.scss';
import Login from '../../components/login/Login';
import Register from '../../components/register/Register';

export default class Authentication extends Component {
	render() {
		return (
			<div className="sign-in-and-sign-up">
				<Login />
				<Register />
			</div>
		);
	}
}
