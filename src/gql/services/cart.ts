import { cookies } from 'next/headers';

import { getClient } from '../client';
import { CartCreateDocument, CartGetItemDocument } from '../codegen/graphql';

export const getCart = async () => {
	const cartId = cookies().get('cartId')?.value;

	if (cartId) {
		const {
			data: { cart },
		} = await getClient().query({
			query: CartGetItemDocument,
			variables: { id: cartId },
			context: { fetchOptions: { next: { tags: ['cart'] } } },
		});
		return cart;
	}
	return null;
};

export const getOrCreateCart = async () => {
	const client = getClient();

	const cart = await getCart();

	if (cart) {
		return cart;
	}
	const { data } = await client.mutate({ mutation: CartCreateDocument, variables: {} });
	const { cart: newCart } = data?.cartCreate || {};

	if (!newCart) {
		throw new Error('Failed to create cart');
	}
	cookies().set('cartId', newCart.id);

	return newCart;
};
