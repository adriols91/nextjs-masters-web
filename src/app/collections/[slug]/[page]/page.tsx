import { CollectionDetails } from '@/components/CollectionDetails';
import { getClient } from '@/gql/client';
import { CollectionGetItemDocument } from '@/gql/codegen/graphql';

export const generateMetadata = async ({ params: { slug } }: { params: { slug: string } }) => {
	const {
		data: { collection },
	} = await getClient().query({ query: CollectionGetItemDocument, variables: { slug } });

	return {
		title: collection?.name,
		description: collection?.description,
	};
};

const CollectionPage = async ({
	params: { slug, page },
}: {
	params: { slug: string; page: string };
}) => {
	const pageNumber = parseInt(page) || 1;

	return <CollectionDetails slug={slug} page={pageNumber} />;
};

export default CollectionPage;
