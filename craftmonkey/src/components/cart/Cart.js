import React from 'react';

import Button from '../button/Button';
import { connect } from 'react-redux';
import './Cart.scss';
import CartItem from '../cart-item/cartItem';
import { selectCartItems } from '../../redux/cart/cartSelector';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cartActions';

const Cart = ({ cartItems, history, dispatch }) => {
	return (
		<div className="cart-dropdown">
			<div className="cart-items">
				{cartItems.length ? (
					cartItems.map(item => <CartItem key={item.id} item={item} />)
				) : (
					<span className="empty-message">Go on! Grab a few clothes</span>
				)}

				<Button
					onClick={() => {
						history.push('/checkout');
						dispatch(toggleCartHidden());
					}}
				>
					Checkout
				</Button>
			</div>
		</div>
	);
};

const mapStatetoProps = state => ({
	cartItems: selectCartItems(state)
});

export default withRouter(connect(mapStatetoProps)(Cart));
