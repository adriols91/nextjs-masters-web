import { getClient } from '@/gql/client';
import { ProductsGetListDocument } from '@/gql/codegen/graphql';

import { ProductsList } from '../ProductsList';

export const RelatedProducts = async ({ productId }: { productId: string }) => {
	const {
		data: { products },
	} = await getClient().query({
		query: ProductsGetListDocument,
		variables: {
			limit: 4,
			filter: {
				relatedTo: productId,
			},
		},
	});

	return (
		<aside data-testid="related-products">
			<h2 className="my-8 text-2xl font-bold tracking-tight text-slate-800">Related products</h2>
			<ProductsList products={products.items} />
		</aside>
	);
};
