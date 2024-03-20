import Image from 'next/image';
import { redirect } from 'next/navigation';

import { Section, SectionTitle } from '@/core/ui';
import { formatPrice } from '@/core/utils';
import { getCart } from '@/gql/services';

import { Quantity } from '../Quantity';
import { RemoveButton } from '../RemoveButton';

export const FullView = async () => {
	const cart = await getCart();

	if (!cart || !cart.items.length) {
		redirect('/');
	}
	return (
		<Section>
			<SectionTitle title="Shopping cart" />
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
							<div className="mt-4">
								<Quantity itemId={id} quantity={quantity} />
								<div className="flex w-full justify-end">
									<RemoveButton itemId={id} />
								</div>
							</div>
						</div>
					</li>
				))}
			</ul>
		</Section>
	);
};
