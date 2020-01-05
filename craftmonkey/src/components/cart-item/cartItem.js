import React from 'react';
import './cartItem.scss';

export default function cartItem({ item }) {
	const { imageUrl, price, name, quantity } = item;
	return (
		<div className="cart-item">
			<img src={imageUrl} alt="item" />
			<div className="item-details">
				<span className="name">{name}</span>
				<span className="name">
					{quantity}x{price}
				</span>
			</div>
		</div>
	);
}
