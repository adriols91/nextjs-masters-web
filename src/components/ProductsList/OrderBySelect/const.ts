import type { SelectOption } from '@/core/ui';

export const PRICE_ASC = 'price↑';
export const PRICE_DESC = 'price↓';
export const RATING_ASC = 'rating↑';
export const RATING_DESC = 'rating↓';
export const POPULARITY_ASC = 'popularity↑';
export const POPULARITY_DESC = 'popularity↓';

export const options: readonly SelectOption[] = Object.freeze([
	{
		label: 'Popularity (High to Low)',
		value: POPULARITY_DESC,
	},
	{
		label: 'Popularity (Low to High)',
		value: POPULARITY_ASC,
	},
	{
		label: 'Price (High to Low)',
		value: PRICE_DESC,
		props: { 'data-testid': 'sort-by-price' },
	},
	{
		label: 'Price (Low to High)',
		value: PRICE_ASC,
		props: { 'data-testid': 'sort-by-price' },
	},
	{
		label: 'Rating (High to Low)',
		value: RATING_DESC,
		props: { 'data-testid': 'sort-by-rating' },
	},
	{
		label: 'Rating (Low to High)',
		value: RATING_ASC,
		props: { 'data-testid': 'sort-by-rating' },
	},
]);
