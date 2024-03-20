import { getClient } from '../client';
import {
	ItemCreateDocument,
	ItemDeleteDocument,
	ItemGetUniqueDocument,
	ItemUpdateDocument,
} from '../codegen/graphql';

export const createOrUpdateItem = async (cartId: string, productId: string) => {
	const client = getClient();
	const {
		data: { item },
	} = await client.query({ query: ItemGetUniqueDocument, variables: { cartId, productId } });

	if (!item) {
		await client.mutate({
			mutation: ItemCreateDocument,
			variables: {
				input: {
					cartId,
					productId,
					quantity: 1,
				},
			},
		});
	} else {
		await client.mutate({
			mutation: ItemUpdateDocument,
			variables: {
				input: {
					id: item.id,
					quantity: item.quantity + 1,
				},
			},
		});
	}
};

export const updateItem = async (id: string, { quantity }: { quantity: number }) => {
	await getClient().mutate({
		mutation: ItemUpdateDocument,
		variables: {
			input: {
				id,
				quantity,
			},
		},
	});
};

export const removeItem = async (id: string) => {
	await getClient().mutate({
		mutation: ItemDeleteDocument,
		variables: { id },
	});
};
