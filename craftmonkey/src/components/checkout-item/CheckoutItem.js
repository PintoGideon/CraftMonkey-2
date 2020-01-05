import React from 'react';
import './CheckoutItem.scss';
import { connect } from 'react-redux';
import {
	deleteItem,
	addItem,
	reduceItemAtCheckout
} from '../../redux/cart/cartActions';

function CheckoutItem({ item, deleteItem, reduceItemAtCheckout, addItem }) {
	const { name, price, imageUrl, quantity } = item;
	return (
		<div className="checkout-item">
			<div className="image-container">
				<img src={imageUrl} alt="cart item" />
			</div>
			<span className="name">{name}</span>
			<span className="quantity">
				<div className="arrow" onClick={() => reduceItemAtCheckout(item)}>
					&#10094;
				</div>
				<span className="value">{quantity}</span>
				<div className="arrow" onClick={() => addItem(item)}>
					&#10095;
				</div>
			</span>
			<span className="price">{price}</span>
			<div className="remove-button" onClick={() => deleteItem(item)}>
				&#10005;
			</div>
		</div>
	);
}

const mapDispatchToProps = dispatch => ({
	deleteItem: item => dispatch(deleteItem(item)),
	addItem: item => dispatch(addItem(item)),
	reduceItemAtCheckout: item => dispatch(reduceItemAtCheckout(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
