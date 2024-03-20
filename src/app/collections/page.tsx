import { CollectionsList } from '@/components';
import { Section } from '@/core/ui';
import { getClient } from '@/gql/client';
import { CollectionsGetListDocument } from '@/gql/codegen/graphql';

const CollectionsPage = async () => {
	const {
		data: { collections },
	} = await getClient().query({ query: CollectionsGetListDocument, variables: {} });

	return (
		<Section>
			<CollectionsList collections={collections.items} />
		</Section>
	);
};

export default CollectionsPage;
