import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/CartIcon';
import './Header.scss';

import { connect } from 'react-redux';
import Cart from '../cart/Cart';

import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cartSelector';
import { selectCurrentUser } from '../../redux/user/userSelector';
import { signOutStart } from '../../redux/user/userActions';

function Header({ currentUser, cart, signOutStart }) {
	return (
		<div className="header">
			<Link to="/" className="logo-container">
				<Logo className="logo" />
			</Link>
			<div className="options">
				<Link className="option" to="/shop">
					Shop
				</Link>
				<Link className="option" to="/contact">
					Contact
				</Link>
				{currentUser ? (
					<div className="option" onClick={signOutStart}>
						Sign Out
					</div>
				) : (
					<Link className="option" to="/signin">
						Sign In
					</Link>
				)}
				<CartIcon />
			</div>
			{cart ? null : <Cart />}
		</div>
	);
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	cart: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
	signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
