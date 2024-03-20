import { Star, StarHalf } from 'lucide-react';

import { formatRating } from '@/core/utils';

export const RatingStars = ({ rating }: { rating: number }) => {
	const title = `${rating.toFixed(1)} out of 5 stars`;
	const roundedRating = formatRating(rating);

	return (
		<div title={title} className="flex items-center">
			<div className="relative flex items-center">
				{Array.from({ length: 5 }, (_, i) => (
					<Star key={i} fill="#cccccc" strokeWidth={0} />
				))}
			</div>
			<div className="absolute flex items-center">
				{Array.from({ length: Math.floor(roundedRating) }, (_, i) => (
					<Star key={i} strokeWidth={0} className="fill-current text-orange-400" />
				))}
				{roundedRating % 1 !== 0 && (
					<StarHalf strokeWidth={0} className="fill-current text-orange-400" />
				)}
			</div>
			<p className="sr-only">${title}</p>
		</div>
	);
};
