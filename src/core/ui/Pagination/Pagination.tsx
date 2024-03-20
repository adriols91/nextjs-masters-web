import type { Route } from 'next';

import { Link } from '../Link';

interface PaginationProps<T extends string> {
	basePath: Route<T>;
	pageSize: number;
	totalCount: number;
}

export const Pagination = <T extends string>({
	basePath,
	pageSize,
	totalCount,
}: PaginationProps<T>) => {
	const pages = Math.ceil(totalCount / pageSize);
	const pageNumbers = Array.from({ length: pages }, (_, i) => i + 1);

	return (
		<nav aria-label="pagination" className="mt-8 border-t-2">
			<ul className="mt-[-2px] flex justify-center">
				{pageNumbers.map((i) => (
					<li key={i}>
						<Link
							href={{ pathname: `${basePath.toString()}/${i}` }}
							className="block border-t-2 px-4 py-2"
							activeClassName="border-t-2 border-t-orange-500 outline-none text-orange-500"
							scroll={false}
						>
							{i}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};
