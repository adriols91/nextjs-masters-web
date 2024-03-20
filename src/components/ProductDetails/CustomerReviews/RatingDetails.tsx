import { Star } from 'lucide-react';

import { RatingStars } from '@/core/ui';
import type { ReviewDetailsFragment } from '@/gql/codegen/graphql';

export const RatingDetails = ({
	rating,
	reviews,
}: {
	rating: number;
	reviews: ReviewDetailsFragment[];
}) => {
	const calulatedRatingPercentage = (reviews: ReviewDetailsFragment[], starsCount: number) => {
		return (reviews.filter((review) => review.rating === starsCount).length / reviews.length) * 100;
	};

	const renderRatingPercentage = (starsCount: number) => {
		const percentage = calulatedRatingPercentage(reviews, starsCount);

		return (
			<div key={starsCount} className="flex items-center text-sm">
				<dt className="flex flex-1 items-center">
					<p className="w-3 font-medium text-gray-900">
						{starsCount}
						<span className="sr-only">{starsCount} star</span>
					</p>
					<div className="ml-1 flex flex-1 items-center">
						<Star strokeWidth={0} className="fill-current text-orange-400" />
						<div className="relative ml-3 flex-1">
							<div className="bg-gray-10 h-3 rounded-full border border-gray-200 bg-gray-100" />
							<div
								className="absolute inset-y-0 rounded-full border border-orange-400 bg-orange-400"
								style={{ width: percentage + '%' }}
							/>
						</div>
					</div>
				</dt>
				<dd className="ml-3 w-10 text-right text-sm tabular-nums text-gray-900">
					{percentage.toFixed()}%
				</dd>
			</div>
		);
	};

	return (
		<>
			<div className="mt-3 flex items-center gap-2">
				<RatingStars rating={rating} />
				<p className="text-sm text-gray-900">Based on {reviews.length} reviews</p>
			</div>
			<div className="mt-6">
				<h3 className="sr-only">Review data</h3>
				<dl className="space-y-3">
					{Array.from({ length: 5 }, (_, i) => renderRatingPercentage(i + 1))}
				</dl>
			</div>
		</>
	);
};
