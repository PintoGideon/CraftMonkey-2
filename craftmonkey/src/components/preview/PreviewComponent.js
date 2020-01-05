import React from 'react';
import './PreviewComponent.scss';
import ShoppingItem from '../shopping-item/ShoppingItem';

export default function PreviewComponent({ title, items }) {
	return (
		<div className="collection-preview">
			<h1 className="title">{title.toUpperCase()}</h1>
			<div className="preview">
				{items
					.filter((item, index) => index < 4)
					.map(item => {
						return <ShoppingItem key={item.id} item={item} />;
					})}
			</div>
		</div>
	);
}
