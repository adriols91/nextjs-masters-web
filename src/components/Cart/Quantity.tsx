'use client';

import { useOptimistic } from 'react';

import { updateItemInCart } from '../actions';

export const Quantity = ({ itemId, quantity }: { itemId: string; quantity: number }) => {
	const [optimisticQuantity, setOptimisticQuantity] = useOptimistic(
		quantity,
		(_state, newQuantity: number) => newQuantity,
	);

	return (
		<form className="flex">
			<button
				className="h-6 w-6 border"
				type="submit"
				formAction={async () => {
					const quantity = Math.max(1, optimisticQuantity - 1);

					setOptimisticQuantity(quantity);

					await updateItemInCart(itemId, { quantity });
				}}
				disabled={optimisticQuantity === 1}
				data-testid="decrement"
			>
				-
			</button>
			<span className="w-8 text-center" data-testid="quantity">
				{optimisticQuantity}
			</span>
			<button
				className="h-6 w-6 border"
				type="submit"
				formAction={async () => {
					const quantity = optimisticQuantity + 1;

					setOptimisticQuantity(quantity);

					await updateItemInCart(itemId, { quantity });
				}}
				data-testid="increment"
			>
				+
			</button>
		</form>
	);
};
