'use server';

import { revalidateTag } from 'next/cache';

import {
	createOrUpdateItem,
	createReview,
	getOrCreateCart,
	processOrder,
	removeItem,
	updateItem,
} from '@/gql/services';

import {
	addItemToCartSchema,
	type AddItemToCartData,
} from './ProductDetails/AddItemToCartForm/schema';
import {
	reviewSchema,
	type ReviewFormData,
} from './ProductDetails/CustomerReviews/ReviewForm/schema';

export const addItemToCart = async (formData: AddItemToCartData) => {
	const parsedData = await addItemToCartSchema.parseAsync(formData);

	const { productId } = parsedData;

	const cart = await getOrCreateCart();

	await createOrUpdateItem(cart.id, productId);

	revalidateTag('cart');
};

export const updateItemInCart = async (id: string, { quantity }: { quantity: number }) => {
	await updateItem(id, { quantity });

	revalidateTag('cart');
};

export const removeItemFromCart = async (itemId: string) => {
	await removeItem(itemId);

	revalidateTag('cart');
};

export const addReview = async (formData: ReviewFormData) => {
	const parsedData = await reviewSchema.parseAsync(formData);

	await createReview({
		productId: parsedData.productId,
		title: formData.headline,
		description: formData.content,
		author: formData.name,
		email: formData.email,
		rating: parseInt(parsedData.rating),
	});

	revalidateTag('product');
};

export const checkout = async () => {
	await processOrder();
};
