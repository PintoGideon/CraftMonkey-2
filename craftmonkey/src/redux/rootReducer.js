import { combineReducers } from 'redux';

import userReducer from './user/userReducer';
import cartReducer from './cart/cartReducer';
import shopReducer from './shop/shopReducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import directoryReducer from './directory/directoryReducer';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['cart'] //only reducer we want to persist is the cart and the user is being handled by firebase
};

const rootReducer = combineReducers({
	user: userReducer,
	cart: cartReducer,
	directory: directoryReducer,
	shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer); // Modified version of our root reducer
