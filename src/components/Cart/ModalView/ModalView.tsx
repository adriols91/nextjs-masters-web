import Image from 'next/image';

import { formatPrice } from '@/core/utils';
import { getCart } from '@/gql/services';

import { CheckoutButton } from './CheckoutButton';

export const ModalView = async () => {
	const cart = await getCart();
	const totalAmount = cart?.items.reduce(
		(acc, { product, quantity }) => acc + product.price * quantity,
		0,
	);

	return (
		<div className="animation-slide-from-right absolute bottom-0 right-0 top-0 z-30 flex h-full flex-col overflow-hidden bg-white shadow-xl sm:w-1/2 lg:w-1/3">
			<div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
				<div className="mb-8 flex items-center justify-between">
					<h3 className="text-lg font-medium text-slate-900">Shopping cart</h3>
					<a href="/cart" className="text-sm text-blue-500">
						(open full view)
					</a>
				</div>
				<ul role="list" className="-my-6 divide-y divide-gray-200">
					{cart?.items.map(({ id, product, quantity }) => (
						<li key={id} className="flex py-6">
							<div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
								<Image
									src={product.coverImages[0]?.url || '/no-image.webp'}
									alt={product.name}
									width="200"
									height="200"
									className="h-24 w-24 rounded-lg object-cover object-center"
								/>
							</div>
							<div className="ml-4 flex flex-1 flex-col">
								<div className="flex justify-between text-base font-medium text-slate-900">
									<h3>{product.name}</h3>
									<p className="ml-4 font-bold italic text-orange-500">
										{formatPrice(product.price)}
									</p>
								</div>
								{product.categories[0] && (
									<p className="mt-1 text-sm text-slate-500">{product.categories[0].name}</p>
								)}
								<div className="flex flex-1 items-end justify-between text-sm">
									<p className="font-bold text-slate-500">Quantity: {quantity}</p>
								</div>
							</div>
						</li>
					))}
				</ul>
			</div>
			{cart && totalAmount && (
				<div className="border-t border-gray-200 px-4 py-6 sm:px-6">
					<div className="flex justify-between text-base font-medium text-slate-900">
						<p>Total</p>
						<p>{formatPrice(totalAmount)}</p>
					</div>
					<p className="mt-0.5 text-sm text-slate-500">
						Shipping and taxes will be added at the next step
					</p>
					<CheckoutButton />
				</div>
			)}
		</div>
	);
};
