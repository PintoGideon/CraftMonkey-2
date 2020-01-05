import { takeEvery, call, put } from 'redux-saga/effects';

import ShopActionTypes from './shopTypes';
import {
	firestore,
	convertCollectionSnapshotToMap
} from '../../firebase/firebase.config';

import {
	fetchCollectionsSuccess,
	fetchCollectionsFailure
} from './shopActions';

export function* fetchCollectionsAsync() {
	try {
		const collectionRef = firestore.collection('collections');
		const snapshot = yield collectionRef.get();
		// call is the effect inside the generator function that invokes the function
		const collectionsMap = yield call(convertCollectionSnapshotToMap, snapshot);
		yield put(fetchCollectionsSuccess(collectionsMap));
	} catch (error) {
		yield put(fetchCollectionsFailure(error.message));
	}
}

export function* fetchCollectionsStart() {
	// TakeEvery creates a non-blocking call.
	yield takeEvery(
		ShopActionTypes.FETCH_COLLECTIONS_START,
		fetchCollectionsAsync
	);
}
