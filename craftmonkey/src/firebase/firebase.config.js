import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

export const createUserProfile = async (userAuth, data) => {
	if (!userAuth) {
		return;
	}
	// check if the user already exists in firestore

	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapshot = await userRef.get();

	if (!snapshot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();
		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...data
			});
		} catch (error) {
			console.log(error);
		}
	}
	return userRef;
};

firebase.initializeApp(firebaseConfig);

export const addCollectionAndDocuments = async (
	collectionKey,
	objectsToAdd
) => {
	const collectionRef = firestore.collection(collectionKey);
	const batch = firestore.batch();
	objectsToAdd.forEach(obj => {
		const newDocRef = collectionRef.doc();
		batch.set(newDocRef, obj);
	});

	return await batch.commit();
};

export const convertCollectionSnapshotToMap = collections => {
	const transformedCollections = collections.docs.map(doc => {
		const { title, items, routeName } = doc.data();
		return {
			routeName: encodeURI(routeName),
			id: doc.id,
			title,
			items
		};
	});

	return transformedCollections.reduce((accumulator, collection) => {
		accumulator[collection.title.toLowerCase()] = collection;
		return accumulator;
	}, {});
};

export const getCurrentUser = () => {
	return new Promise((resolve, reject) => {
		const unsubscribe = auth.onAuthStateChanged(userAuth => {
			unsubscribe();
			resolve(userAuth);
		}, reject);
	});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();

googleProvider.setCustomParameters({
	prompt: 'select_account'
});

//export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
