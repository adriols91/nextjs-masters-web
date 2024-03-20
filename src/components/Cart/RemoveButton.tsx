'use client';

import { useTransition } from 'react';

import { removeItemFromCart } from '../actions';

export const RemoveButton = ({ itemId }: { itemId: string }) => {
	const [isPending, startTransition] = useTransition();

	return (
		<button
			disabled={isPending}
			onClick={() =>
				startTransition(async () => {
					await removeItemFromCart(itemId);
				})
			}
			className="text-sm font-medium text-red-600 hover:text-red-500 disabled:cursor-wait disabled:text-slate-400"
		>
			Remove
		</button>
	);
};
