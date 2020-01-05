import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import { fetchCollectionsStart } from '../../redux/shop/shopActions';
import CollectionsOverviewContainer from '../../components/collections-overview/CollectionsOverviewContainer';
import CollectionContainer from '../../pages/collection/CollectionContainer';

const ShopPage = ({ fetchCollectionsStart, match }) => {
	useEffect(() => {
		fetchCollectionsStart();
	}, [fetchCollectionsStart]);
	return (
		<div className="shop-page">
			<Route
				exact
				path={`${match.path}`}
				component={CollectionsOverviewContainer}
			/>
			<Route
				exact
				path={`${match.path}/:collectionId`}
				component={CollectionContainer}
			/>
		</div>
	);
};

const mapDispatchToProps = dispatch => ({
	fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);
