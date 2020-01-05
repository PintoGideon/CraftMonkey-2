import { all, call } from 'redux-saga/effects';

import { fetchCollectionsStart } from './shop/shopSagas';
import { userSagas } from './user/userSaga';
import { cartSagas } from './cart/cartSagas';

//Call any number of sagas in the array and initalize them on different task streams.

export default function* rootSaga() {
	yield all([call(fetchCollectionsStart), call(userSagas), call(cartSagas)]);
}
