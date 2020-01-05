import React from 'react';
import { SpinnerContainer, SpinnerOverlay } from './WithSpinnerStyles';

export default function WithSpinner(WrappedComponent) {
	return function({ isLoading, ...otherProps }) {
		return isLoading ? (
			<SpinnerOverlay>
				<SpinnerContainer />
			</SpinnerOverlay>
		) : (
			<WrappedComponent {...otherProps} />
		);
	};
}
