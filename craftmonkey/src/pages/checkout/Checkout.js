import React, { Component } from 'react';
import './Checkout.scss';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
	selectCartItems,
	selectCartTotal
} from '../../redux/cart/cartSelector';
import CheckoutItem from '../../components/checkout-item/CheckoutItem';

class Checkout extends Component {
	render() {
		const { cartItems, totalPrice } = this.props;
		return (
			<div className="checkout-page">
				<div className="checkout-header">
					<div className="header-block">
						<span>Product</span>
					</div>

					<div className="header-block">
						<span>Descriptions</span>
					</div>
					<div className="header-block">
						<span>Quantity</span>
					</div>
					<div className="header-block">
						<span>Price</span>
					</div>

					<div className="header-block">
						<span>Remove</span>
					</div>
				</div>
				{cartItems.map(item => (
					<CheckoutItem key={item.id} item={item} />
				))}
				<div className="total">
					<span>TOTAL $ {totalPrice}</span>
				</div>
			</div>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	totalPrice: selectCartTotal
});

export default connect(mapStateToProps)(Checkout);
