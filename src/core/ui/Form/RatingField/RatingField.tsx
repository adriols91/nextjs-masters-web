import { Fragment } from 'react';

import { Star } from 'lucide-react';

export const RatingField = () => {
	return (
		<div>
			<span className="text-xs text-gray-700">Rating</span>
			<fieldset className="stars-rating flex flex-row-reverse justify-end">
				{Array.from({ length: 5 }, (_, i) => (
					<Fragment key={i}>
						<input
							className="sr-only"
							id={`rating-${5 - i}`}
							type="radio"
							value={5 - i}
							name="rating"
						/>
						<label htmlFor={`rating-${5 - i}`}>
							<Star fill="white" strokeWidth={1} stroke="#cccccc" />
							<span className="sr-only">{5 - i} stars</span>
						</label>
					</Fragment>
				))}
			</fieldset>
		</div>
	);
};
