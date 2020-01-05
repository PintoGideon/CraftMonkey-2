import React, { useEffect } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';

import HomePage from '../src/pages/homepage/HomePage';
import ShopPage from '../src/pages/shoppage/ShopPage';
import Checkout from '../src/pages/checkout/Checkout';
import Authentication from '../src/pages/authentication/Authentication';
import Header from '../src/components/header/Header';

import { connect } from 'react-redux';

import { selectCurrentUser } from './redux/user/userSelector';

import { createStructuredSelector } from 'reselect';

import { selectCollectionsForPreview } from '../src/redux/shop/shopSelector';

import { checkUserSession } from './redux/user/userActions';

const App = ({ checkUserSession, currentUser }) => {
	useEffect(() => {
		checkUserSession();
	}, [checkUserSession]);

	return (
		<div>
			<Header />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/shop" component={ShopPage} />
				<Route
					exact
					path="/signin"
					render={() =>
						currentUser ? <Redirect to="/" /> : <Authentication />
					}
				/>
				<Route exact path="/checkout" component={Checkout} />
			</Switch>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	collectionsArray: selectCollectionsForPreview
});

const mapDispatchToProps = dispatch => ({
	checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
