import Link from 'next/link';

import { CoverImage } from '@/core/ui';
import type { CollectionOnListFragment } from '@/gql/codegen/graphql';

export const CollectionsList = async ({
	collections,
}: {
	collections: CollectionOnListFragment[];
}) => {
	return (
		<div className="px-4">
			<div className="mx-auto py-4">
				<h2 className="sr-only">Collections</h2>
				<div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:gap-y-8 lg:space-y-0">
					{collections.map((collection) => (
						<div key={collection.id} className="group relative">
							<div className="sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 relative h-80 w-full overflow-hidden rounded-lg bg-white transition group-hover:scale-110 group-hover:opacity-75 sm:h-64">
								<CoverImage src={collection.image?.url} alt={collection.name} />
							</div>
							<h3 className="mt-4 text-center font-bold text-slate-700">
								<Link href={`/collections/${collection.slug}`}>
									<span className="absolute inset-0"></span>
									{collection.name}
								</Link>
							</h3>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
