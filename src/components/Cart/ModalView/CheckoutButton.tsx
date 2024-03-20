'use client';

import { useTransition } from 'react';

import { checkout } from '@/components/actions';
import { Button } from '@/core/ui';

export const CheckoutButton = () => {
	const [isPending, startTransition] = useTransition();

	return (
		<Button
			onClick={() =>
				startTransition(async () => {
					await checkout();
				})
			}
			className="py-4"
			disabled={isPending}
		>
			Checkout
		</Button>
	);
};
