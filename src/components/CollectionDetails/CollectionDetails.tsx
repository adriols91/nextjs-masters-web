import { notFound } from 'next/navigation';

import { PRODUCTS_LIST_PAGE_SIZE } from '@/core/const';
import { Pagination, Section, SectionTitle } from '@/core/ui';
import { getClient } from '@/gql/client';
import { CollectionGetItemDocument, ProductsGetListDocument } from '@/gql/codegen/graphql';

import { ProductsList } from '../ProductsList';

export const CollectionDetails = async ({ slug, page }: { slug: string; page: number }) => {
	const {
		data: { collection },
	} = await getClient().query({ query: CollectionGetItemDocument, variables: { slug } });

	if (!collection) {
		throw notFound();
	}
	const {
		data: { products },
	} = await getClient().query({
		query: ProductsGetListDocument,
		variables: {
			filter: {
				collectionId: collection.id,
			},
			limit: PRODUCTS_LIST_PAGE_SIZE,
			offset: page ? (page - 1) * PRODUCTS_LIST_PAGE_SIZE : 0,
		},
	});

	return (
		<Section>
			<SectionTitle title={collection.name} />
			<ProductsList products={products.items} />
			<Pagination
				basePath={`/collections/${slug}`}
				pageSize={PRODUCTS_LIST_PAGE_SIZE}
				totalCount={products.totalCount}
			/>
		</Section>
	);
};
