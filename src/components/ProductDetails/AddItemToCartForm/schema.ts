import * as zod from 'zod';

export const addItemToCartSchema = zod.object({
	productId: zod.string(),
	color: zod.string(),
	size: zod.string(),
});

export type AddItemToCartData = zod.infer<typeof addItemToCartSchema>;
