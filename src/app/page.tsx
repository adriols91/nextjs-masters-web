import { CollectionsList, ProductsList } from '@/components';
import { Section, SectionTitle } from '@/core/ui';
import { getClient } from '@/gql/client';
import { CollectionsGetListDocument, ProductsGetListDocument } from '@/gql/codegen/graphql';

const HomePage = async () => {
	const {
		data: { collections },
	} = await getClient().query({ query: CollectionsGetListDocument, variables: { limit: 3 } });

	const {
		data: { products },
	} = await getClient().query({
		query: ProductsGetListDocument,
		variables: {
			limit: 4,
		},
	});

	return (
		<Section>
			<CollectionsList collections={collections.items} />
			<SectionTitle title="Most popular products" className="mt-8" />
			<ProductsList products={products.items} />
		</Section>
	);
};

export default HomePage;
