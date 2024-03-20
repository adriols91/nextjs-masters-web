import { PackageCheck } from 'lucide-react';
import Stripe from 'stripe';

import { Section, SectionTitle } from '@/core/ui';
import { formatPrice } from '@/core/utils';

const PaymentSuccessPage = async ({
	searchParams,
}: {
	searchParams: { payment_intent: string };
}) => {
	if (!process.env.STRIPE_SECRET_KEY) {
		return null;
	}

	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
		apiVersion: '2023-10-16',
		typescript: true,
	});

	const { status, amount } = await stripe.paymentIntents.retrieve(searchParams.payment_intent);

	return (
		<Section>
			<SectionTitle title="Your payment was successful" />
			<div className="flex gap-2">
				<PackageCheck size={40} className="text-green-500" />
				<p className="mt-2 text-lg text-slate-700">Thank you for shopping</p>
			</div>
			<div className="mt-8 flex gap-2">
				<p className="text-xl font-bold italic text-slate-600">Internal payment status:</p>
				<p className="text-xl font-bold italic text-orange-500">
					{status === 'succeeded' ? 'succeeded' : 'in progress'}
				</p>
			</div>
			<p className="mt-2 text-lg text-gray-500">
				Your order has been dispatched and will be shipped soon
			</p>
			<div className="mt-12 flex justify-between border-t-2 pt-4 text-base font-medium text-slate-900">
				<p className="text-xl">Total</p>
				<p className="text-xl font-bold italic text-orange-500">{formatPrice(amount)}</p>
			</div>
		</Section>
	);
};

export default PaymentSuccessPage;
