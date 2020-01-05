import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectIsCollectionFetching } from '../../redux/shop/shopSelector';
import WithSpinner from '../with-spinner/WithSpinner';
import { compose } from 'redux';

import CollectionsOverview from './CollectionsOverview';

const mapStateToProps = createStructuredSelector({
	isLoading: selectIsCollectionFetching
});

const CollectionsOverviewContainer = compose(
	connect(mapStateToProps),
	WithSpinner
)(CollectionsOverview);
// Compose evaluates the componnets from right to left

export default CollectionsOverviewContainer;
