import Link from 'next/link';

import { CoverImage, RatingStars } from '@/core/ui';

import { formatPrice, formatRating } from '@/core/utils';
import type { ProductOnListFragment } from '@/gql/codegen/graphql';

import { getProductCoverImageProps } from '../helpers';

export const ProductsList = ({ products }: { products: ProductOnListFragment[] }) => {
	return (
		<>
			<ul
				className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
				data-testid="products-list"
			>
				{products.map((product) => (
					<li key={product.id} className="h-96 grow">
						<Link href={`/product/${product.id}`}>
							<article className="flex h-full flex-col overflow-hidden rounded-lg border shadow-lg">
								<CoverImage {...getProductCoverImageProps(product)} />
								<div className="border-t bg-gradient-to-br from-orange-50 to-orange-300 px-4 py-2">
									<div className="flex flex-row items-center justify-between">
										<h3 className="py-2 text-center font-semibold text-slate-600">
											{product.name}
										</h3>
										<p
											className="text-sm font-medium italic text-slate-800"
											data-testid="product-price"
										>
											{formatPrice(product.price)}
										</p>
									</div>
									<div className="flex h-8 flex-row items-center justify-between">
										<p className="text-sm text-slate-500">{product.categories[0]?.name}</p>
										{product.rating && (
											<div className="flex items-center gap-x-2">
												<p
													aria-hidden="true"
													className="small-caps text-xs"
													data-testid="product-rating"
												>
													{product.rating.toFixed(1)}/5
												</p>
												<RatingStars rating={formatRating(product.rating)} />
											</div>
										)}
									</div>
								</div>
							</article>
						</Link>
					</li>
				))}
			</ul>
		</>
	);
};
