import { createSelector } from 'reselect';

const selectCart = state => state.cart;

// The first argument is a collection, the second argument is a function that returns the value we want from the seelctor

// We have memoized the selector
export const selectCartItems = createSelector(
	[selectCart],
	cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
	[selectCartItems],
	cartItems =>
		cartItems.reduce((totalQuantity, item) => totalQuantity + item.quantity, 0)
);

export const selectCartHidden = createSelector(
	[selectCart],
	cart => cart.showCart
);

export const selectCartTotal = createSelector([selectCartItems], cartItems =>
	cartItems.reduce(
		(totalQuantity, item) => totalQuantity + item.quantity * item.price,
		0
	)
);
