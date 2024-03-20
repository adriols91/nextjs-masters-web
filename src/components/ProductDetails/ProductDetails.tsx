import { Suspense } from 'react';

import { notFound } from 'next/navigation';

import { Button, CoverImage, LoadingSpinner, Section, Select } from '@/core/ui';
import { formatPrice } from '@/core/utils';
import { getClient } from '@/gql/client';
import { ProductGetItemDocument } from '@/gql/codegen/graphql';

import { addItemToCart } from '../actions';
import { getColorsChoices, getProductCoverImageProps, getSizesChoices } from '../helpers';

import { CustomerReviews } from './CustomerReviews';
import { RelatedProducts } from './RelatedProducts';

export const ProductDetails = async ({ id }: { id: string }) => {
	const {
		data: { product },
	} = await getClient().query({
		query: ProductGetItemDocument,
		variables: { id },
		context: { fetchOptions: { next: { tags: [`product`] } } },
	});

	if (!product) {
		throw notFound();
	}

	return (
		<Section>
			<article>
				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
					<CoverImage {...getProductCoverImageProps(product)} keepAspectRatio />
					<div className="sm:px-6">
						<div className="flex items-center justify-between">
							<h1 className="text-3xl font-bold tracking-tight">{product.name}</h1>
							<div className="text-3xl font-bold italic text-orange-400">
								{formatPrice(product.price)}
							</div>
						</div>
						<div className="mt-4 text-slate-500">{product.description}</div>
						<div className="mt-8">
							<form action={addItemToCart}>
								<input type="text" name="productId" value={product.id} hidden readOnly />
								<div className="flex items-center gap-4">
									<Select label="Color" name="color" options={getColorsChoices(product)} />
									<Select label="Size" name="size" options={getSizesChoices(product)} />
								</div>
								<Button className="py-4" data-testid="add-to-cart-button">
									Add to cart
								</Button>
							</form>
						</div>
					</div>
				</div>
			</article>
			<Suspense fallback={<LoadingSpinner />}>
				<RelatedProducts productId={product.id} />
			</Suspense>
			<Suspense fallback={<LoadingSpinner />}>
				<CustomerReviews product={product} />
			</Suspense>
		</Section>
	);
};
