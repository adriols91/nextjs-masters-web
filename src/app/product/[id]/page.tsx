import { ProductDetails } from '@/components/ProductDetails';
import { getClient } from '@/gql/client';
import { ProductGetItemDocument } from '@/gql/codegen/graphql';

export const generateMetadata = async ({ params: { id } }: { params: { id: string } }) => {
	const {
		data: { product },
	} = await getClient().query({ query: ProductGetItemDocument, variables: { id } });

	return {
		title: product?.name,
		description: product?.description,
	};
};

const ProductPage = async ({ params: { id } }: { params: { id: string } }) => {
	return <ProductDetails id={id} />;
};

export default ProductPage;
