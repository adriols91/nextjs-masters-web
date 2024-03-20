'use client';

import { useOptimistic } from 'react';

import type { ProductDetailsFragment, ReviewDetailsFragment } from '@/gql/codegen/graphql';

import { RatingDetails } from './RatingDetails';
import { RecentReviewsList } from './RecentReviewsList';
import { ReviewForm } from './ReviewForm';

export const CustomerReviews = ({ product }: { product: ProductDetailsFragment }) => {
	const { rating, reviews } = product;
	const [optimisticReviews, setOptimisticReviews] = useOptimistic(
		reviews,
		(_state, newReviews: ReviewDetailsFragment[]) => newReviews,
	);

	const addOptimisticReview = (review: ReviewDetailsFragment) => {
		setOptimisticReviews([review, ...optimisticReviews]);
	};

	return (
		<div className="mx-auto max-w-2xl lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-x-8 lg:pt-16">
			<div className="lg:col-span-4">
				<h2 className="text-2xl font-bold tracking-tight text-slate-800">Customer reviews</h2>
				{!!rating && <RatingDetails rating={rating} reviews={optimisticReviews} />}
				<div className="mt-10">
					<h3 className="text-lg font-medium text-gray-900">Share your thoughts</h3>
					<p className="mt-1 text-sm text-gray-600">
						If you’ve used this product, share your thoughts with other customers
					</p>
					<ReviewForm
						productId={product.id}
						addOptimisticReview={addOptimisticReview}
						className="mt-2"
					/>
				</div>
			</div>
			<div className="mt-16 lg:col-span-7 lg:col-start-6 lg:mt-0">
				<h3 className="sr-only">Recent reviews</h3>
				<RecentReviewsList reviews={optimisticReviews} />
			</div>
		</div>
	);
};
