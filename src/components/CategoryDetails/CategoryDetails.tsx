import { notFound } from 'next/navigation';

import { PRODUCTS_LIST_PAGE_SIZE } from '@/core/const';
import { Pagination, Section, SectionTitle } from '@/core/ui';
import { getClient } from '@/gql/client';
import { CategoryGetItemDocument, ProductsGetListDocument } from '@/gql/codegen/graphql';

import { ProductsList } from '../ProductsList';

export const CategoryDetails = async ({ slug, page }: { slug: string; page: number }) => {
	const {
		data: { category },
	} = await getClient().query({ query: CategoryGetItemDocument, variables: { slug } });

	if (!category) {
		throw notFound();
	}
	const {
		data: { products },
	} = await getClient().query({
		query: ProductsGetListDocument,
		variables: {
			filter: { categoryId: category.id },
			limit: PRODUCTS_LIST_PAGE_SIZE,
			offset: page ? (page - 1) * PRODUCTS_LIST_PAGE_SIZE : 0,
		},
	});

	return (
		<Section>
			<SectionTitle title={category.name} />
			<ProductsList products={products.items} />
			<Pagination
				basePath={`/categories/${slug}`}
				pageSize={PRODUCTS_LIST_PAGE_SIZE}
				totalCount={products.totalCount}
			/>
		</Section>
	);
};
