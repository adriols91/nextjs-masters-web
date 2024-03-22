import { ProductsList } from '@/components/ProductsList';
import { OrderBySelect } from '@/components/ProductsList/OrderBySelect';
import { PRODUCTS_LIST_PAGE_SIZE } from '@/core/const';
import type { OrderByParam } from '@/core/types';
import { Pagination, Section, SectionTitle } from '@/core/ui';
import { parseOrderByParam } from '@/core/utils';
import { getClient } from '@/gql/client';
import { ProductsGetListDocument, Sort } from '@/gql/codegen/graphql';

const INITIAL_ORDER_BY: OrderByParam = {
	field: 'popularity',
	direction: Sort.Desc,
};

export const generateStaticParams = () => {
	return Array.from({ length: 3 }, (_, i) => ({ page: (i + 1).toString() }));
};

const ProductsPage = async ({
	params: { page },
	searchParams: { orderBy },
}: {
	params: { page: string };
	searchParams: { orderBy?: string };
}) => {
	const pageNumber = parseInt(page) || 1;
	const orderByParam = orderBy ? parseOrderByParam(orderBy) : INITIAL_ORDER_BY;

	const {
		data: { products },
	} = await getClient().query({
		query: ProductsGetListDocument,
		variables: {
			limit: PRODUCTS_LIST_PAGE_SIZE,
			offset: page ? (pageNumber - 1) * PRODUCTS_LIST_PAGE_SIZE : 0,
			orderBy: [{ popularity: Sort.Desc }, { [orderByParam.field]: orderByParam.direction }],
		},
	});

	return (
		<Section>
			<SectionTitle title="All products">
				<OrderBySelect />
			</SectionTitle>
			<ProductsList products={products.items} />
			<Pagination
				basePath="/products"
				pageSize={PRODUCTS_LIST_PAGE_SIZE}
				totalCount={products.totalCount}
			/>
		</Section>
	);
};

export default ProductsPage;
