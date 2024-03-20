'use client';

import { useCallback, useEffect } from 'react';

import { useLazyQuery } from '@apollo/client';

import { useSearchParams } from 'next/navigation';

import { usePrevious } from '@/core/hooks';
import { LoadingSpinner } from '@/core/ui';
import { ProductsGetListDocument } from '@/gql/codegen/graphql';

import { ProductsList } from '../ProductsList';

export const ProductsSearchResults = () => {
	const searchParams = useSearchParams();
	const prevQuery = usePrevious(searchParams.get('query'));
	const [executeSearch, { loading, data }] = useLazyQuery(ProductsGetListDocument);

	const query = searchParams.get('query');

	const search = useCallback(
		async (query: string) => {
			await executeSearch({
				variables: {
					filter: {
						nameContains: query,
					},
					limit: 20,
				},
			});
		},
		[executeSearch],
	);

	useEffect(() => {
		if (query && query.length >= 2) {
			void search(query);
		} else if (!prevQuery || (prevQuery?.length || 0) >= 2) {
			void search('');
		}
	}, [prevQuery, query, search]);

	const renderResults = () => {
		if (data?.products.items.length === 0) {
			return (
				<div className="flex h-[25vh] w-full items-center justify-center">
					<p className="w-full text-center text-2xl">No products found</p>
				</div>
			);
		}
		return <ProductsList products={data?.products.items || []} />;
	};

	return loading ? <LoadingSpinner /> : renderResults();
};
