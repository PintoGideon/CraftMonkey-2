import React from 'react';
import './Button.scss';

export default function Button({
	children,
	inverted,
	isGoogleSignIn,
	...buttonprops
}) {
	return (
		<button
			className={`${inverted ? 'inverted' : ''}${
				isGoogleSignIn ? 'google-sign-in' : ''
			} custom-button`}
			{...buttonprops}
		>
			{children}
		</button>
	);
}
