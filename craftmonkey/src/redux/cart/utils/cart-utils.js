export const addItemToCart = (cartItems, cartItemToAdd) => {
	const existingItem = cartItems.find(item => item.id === cartItemToAdd.id);
	if (existingItem) {
		return cartItems.map(item =>
			cartItemToAdd.id === item.id
				? { ...item, quantity: item.quantity + 1 }
				: item
		);
	}
	return [
		...cartItems,
		{
			...cartItemToAdd,
			quantity: 1
		}
	];
};

export const deleteItemAtCheckout = (cartItems, cartItemToDelete) => {
	const existingItem = cartItems.find(item => item.id === cartItemToDelete.id);

	if (existingItem.quantity === 1) {
		return cartItems.filter(item => item.id !== cartItemToDelete.id);
	}
	return cartItems.map(item =>
		item.id === cartItemToDelete.id
			? {
					...item,
					quantity: item.quantity - 1
			  }
			: item
	);
};
