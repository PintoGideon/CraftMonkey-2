import React from 'react';
import './CollectionsOverview.scss';
import { createStructuredSelector } from 'reselect';
import PreviewComponent from '../preview/PreviewComponent';
import { selectCollectionsForPreview } from '../../redux/shop/shopSelector';
import { connect } from 'react-redux';

function CollectionsOverview({ collections }) {
	return (
		<div className="collections-overview">
			{collections.map(collection => (
				<PreviewComponent
					key={collection.id}
					title={collection.title}
					items={collection.items}
				/>
			))}
		</div>
	);
}

const mapStateToProps = createStructuredSelector({
	collections: selectCollectionsForPreview
});

export default connect(mapStateToProps, null)(CollectionsOverview);
