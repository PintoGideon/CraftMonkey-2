import React from 'react';
import './Collection.scss';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shopSelector';
import ShoppingItem from '../../components/shopping-item/ShoppingItem';

function Collection({ collection }) {
	const { title, items } = collection;
	return (
		<div className="collection-page">
			<div className="title">{title}</div>
			<div className="items">
				{items.map(item => (
					<ShoppingItem key={item.id} item={item} />
				))}
			</div>
		</div>
	);
}

const mapStateToProps = (state, props) => ({
	collection: selectCollection(props.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(Collection);
