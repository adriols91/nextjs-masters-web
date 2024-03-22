import { ProductDetails } from '@/components/ProductDetails';
import { getClient } from '@/gql/client';
import { ProductGetItemDocument, ProductsGetIdsDocument } from '@/gql/codegen/graphql';

export const generateMetadata = async ({ params: { id } }: { params: { id: string } }) => {
	const {
		data: { product },
	} = await getClient().query({ query: ProductGetItemDocument, variables: { id } });

	return {
		title: product?.name,
		description: product?.description,
	};
};

export const generateStaticParams = async () => {
	const {
		data: { products },
	} = await getClient().query({ query: ProductsGetIdsDocument, variables: {} });

	return products.items;
};

const ProductPage = async ({ params: { id } }: { params: { id: string } }) => {
	return <ProductDetails id={id} />;
};

export default ProductPage;
