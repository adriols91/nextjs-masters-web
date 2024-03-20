import { CategoriesList } from '@/components';
import { Section } from '@/core/ui';
import { getClient } from '@/gql/client';
import { CategoriesGetListDocument } from '@/gql/codegen/graphql';

const CategoriesPage = async () => {
	const {
		data: { categories },
	} = await getClient().query({ query: CategoriesGetListDocument, variables: {} });

	return (
		<Section>
			<CategoriesList categories={categories.items} />
		</Section>
	);
};

export default CategoriesPage;
