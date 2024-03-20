import { CategoryDetails } from '@/components/CategoryDetails';

import { getClient } from '@/gql/client';
import { CategoryGetItemDocument } from '@/gql/codegen/graphql';

export const generateMetadata = async ({ params: { slug } }: { params: { slug: string } }) => {
	const {
		data: { category },
	} = await getClient().query({ query: CategoryGetItemDocument, variables: { slug } });

	return {
		title: category?.name,
		description: category?.description,
	};
};

const CategoryPage = async ({
	params: { slug, page },
}: {
	params: { slug: string; page: string };
}) => {
	const pageNumber = parseInt(page) || 1;

	return <CategoryDetails slug={slug} page={pageNumber} />;
};

export default CategoryPage;
