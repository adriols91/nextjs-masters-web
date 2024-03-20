export const formatPrice = (price: number) => {
	return (price / 100).toLocaleString('pl-PL', {
		style: 'currency',
		currency: 'PLN',
	});
};

export const formatRating = (rating: number) => {
	return Math.round(rating * 2) / 2;
};
