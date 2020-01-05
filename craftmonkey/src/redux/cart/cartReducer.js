import CartActionTypes from './cartTypes';
import { addItemToCart } from './utils/cart-utils';
import { deleteItemAtCheckout } from './utils/cart-utils';
import UserActionTypes from '../user/userTypes';

const intitalState = {
	showCart: true,
	cartItems: []
};

const cartReducer = (state = intitalState, action) => {
	switch (action.type) {
		case CartActionTypes.TOGGLE_CART_HIDDEN:
			return {
				...state,
				showCart: !state.showCart
			};

		case CartActionTypes.ADD_ITEM:
			return {
				...state,
				cartItems: addItemToCart(state.cartItems, action.payload)
			};

		case CartActionTypes.DELETE_ITEM:
			return {
				...state,
				cartItems: state.cartItems.filter(item => item.id !== action.payload.id)
			};

		case CartActionTypes.REDUCE_QUANTITY_AT_CHECKOUT:
			return {
				...state,
				cartItems: deleteItemAtCheckout(state.cartItems, action.payload)
			};
		case CartActionTypes.CLEAR_CART:
			return {
				...state,
				cartItems: []
			};

		default:
			return state;
	}
};

export default cartReducer;
