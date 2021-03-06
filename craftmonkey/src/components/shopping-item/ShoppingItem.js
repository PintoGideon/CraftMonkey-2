import React from 'react';
import './ShoppingItem.scss';
import Button from '../button/Button';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cartActions';

function ShoppingItem({ item, addItem }) {
	const {  name, price, imageUrl } = item;
	return (
		<div className="collection-item">
			<div
				className="image"
				style={{
					backgroundImage: `url(${imageUrl})`
				}}
			/>
			<div className="collection-footer">
				<span className="name">{name}</span>
				<span className="price">{price}</span>
			</div>
			<Button inverted onClick={() => addItem(item)}>
				Add to Cart
			</Button>
		</div>
	);
}
const mapDispatchToProps = dispatch => ({
	addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(ShoppingItem);
