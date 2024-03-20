import type { ProductDetailsFragment, ProductOnListFragment } from '@/gql/codegen/graphql';

export const getProductCoverImageProps = (product: ProductOnListFragment) => {
	const coverImage = product.coverImages[0];

	return {
		src: coverImage?.url,
		alt: coverImage?.alt || product.name,
	};
};

export const getColorsChoices = (product: ProductDetailsFragment) => {
	return product.colors.map(({ id, name }) => ({ label: name, value: id }));
};

export const getSizesChoices = (product: ProductDetailsFragment) => {
	return product.sizes.map(({ id, name }) => ({ label: name, value: id }));
};
