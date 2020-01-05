import { connect } from 'react-redux';
import { compose } from 'redux';

import { createStructuredSelector } from 'reselect';
import { selectionIsCollectionsLoaded } from '../../redux/shop/shopSelector';
import WithSpinner from '../../components/with-spinner/WithSpinner';

import Collection from './Collection';

const mapStateToProps = createStructuredSelector({
	isLoading: state => !selectionIsCollectionsLoaded(state)
});

const CollectionPageContainer = compose(
	connect(mapStateToProps),
	WithSpinner
)(Collection);

export default CollectionPageContainer;
