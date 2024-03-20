import type { CartDetailsFragment } from '@/gql/codegen/graphql';

export const getTotalAmount = (cart: CartDetailsFragment) => {
	return cart.items.reduce((acc, { product, quantity }) => acc + product.price * quantity, 0);
};
