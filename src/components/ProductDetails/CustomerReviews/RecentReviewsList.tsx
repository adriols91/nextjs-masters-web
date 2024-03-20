import Image from 'next/image';

import { RatingStars } from '@/core/ui';
import { formatRating } from '@/core/utils';
import { type ReviewDetailsFragment } from '@/gql/codegen/graphql';

export const RecentReviewsList = ({ reviews }: { reviews: ReviewDetailsFragment[] }) => {
	return (
		<>
			<h3 className="sr-only">Recent reviews</h3>
			<div className="flow-root">
				<div className="-my-12 divide-y divide-gray-200">
					{reviews.map((review) => (
						<div key={review.id} className="py-12">
							<div className="flex items-center">
								<Image
									src="/no-image.webp"
									alt={review.author}
									width={48}
									height={48}
									className="h-12 w-12 rounded-full"
								/>
								<div className="ml-4">
									<h4 className="text-sm font-bold text-gray-900">{review.author}</h4>
									<div className="mt-1 flex flex-row items-center gap-2">
										<p aria-hidden="true" className="small-caps text-sm">
											{formatRating(review.rating)}/5
										</p>
										<RatingStars rating={review.rating} />
									</div>
								</div>
							</div>
							<div>
								<p className="mb-2 mt-4 space-y-6 text-sm font-bold text-gray-600">
									{review.title}
								</p>
								<p className="mt-2 text-sm italic text-gray-600">{review.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};
