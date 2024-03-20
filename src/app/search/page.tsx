import { Suspense } from 'react';

import { ProductsSearchResults } from '@/components/ProductsSearchResults';
import { Section, SectionTitle } from '@/core/ui';

const SearchPage = () => {
	return (
		<Section>
			<SectionTitle title="Search reults" />
			<Suspense fallback={<div>Loading...</div>}>
				<ProductsSearchResults />
			</Suspense>
		</Section>
	);
};

export default SearchPage;
