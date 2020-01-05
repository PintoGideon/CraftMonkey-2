import CartActionTypes from './cartTypes';

export const toggleCartHidden = () => ({
	type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
	type: CartActionTypes.ADD_ITEM,
	payload: item
});

export const deleteItem = item => {
	console.log('ITEMMMMM');
	return {
		type: CartActionTypes.DELETE_ITEM,
		payload: item
	};
};

export const reduceItemAtCheckout = item => ({
	type: CartActionTypes.REDUCE_QUANTITY_AT_CHECKOUT,
	payload: item
});

export const clearCart = () => ({
	type: CartActionTypes.CLEAR_CART
});
