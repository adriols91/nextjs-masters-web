import { cookies } from 'next/headers';

import { redirect } from 'next/navigation';
import Stripe from 'stripe';

import { getTotalAmount } from '@/core/utils';

import { getClient } from '../client';

import { OrderCreateDocument } from '../codegen/graphql';

import { getCart } from './cart';

export const processOrder = async () => {
	const cart = await getCart();

	if (!cart) {
		redirect('/');
	}
	const totalAmount = getTotalAmount(cart);

	const { data } = await getClient().mutate({
		mutation: OrderCreateDocument,
		variables: {
			input: {
				lines: JSON.stringify(cart.items),
				totalAmount,
			},
		},
	});
	const orderId = data?.orderCreate?.order?.id;

	if (!orderId) {
		throw new Error('Failed to create order');
	}

	if (!process.env.STRIPE_SECRET_KEY) {
		throw new Error('Missing STRIPE_SECRET_KEY env variable');
	}

	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
		apiVersion: '2023-10-16',
		typescript: true,
	});

	const paymentIntent = await stripe.paymentIntents.create({
		amount: totalAmount,
		currency: 'pln',
		automatic_payment_methods: {
			enabled: true,
		},
		metadata: {
			orderId,
		},
	});

	if (!paymentIntent.client_secret) {
		throw new Error('Missing client_secret');
	}

	cookies().delete('cartId');

	redirect(`/payment/${paymentIntent.client_secret}?totalAmount=${totalAmount}`);
};
