'use client';

import type { Route } from 'next';

import debounce from 'lodash.debounce';
import { Search } from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export const SearchInput = () => {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const handleSearch = debounce(async (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		const searchUrl: Route = `/search?query=${value}`;

		if (pathname === '/search') {
			router.replace(searchUrl);
		} else {
			router.push(searchUrl);
		}
	}, 500);

	return (
		<div className="w-full max-w-lg lg:max-w-xs">
			<label htmlFor="search" className="sr-only">
				Search
			</label>
			<div className="relative">
				<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
					<Search className="h-5 w-5 text-slate-600" />
				</div>
				<input
					className="w-full rounded-md border-0 bg-violet-200 py-2 pl-11 pr-4 text-sm text-slate-800 ring-1 ring-inset ring-gray-300 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-300"
					placeholder="Search"
					type="search"
					name="search"
					defaultValue={searchParams.get('query') || ''}
					onChange={handleSearch}
				/>
			</div>
		</div>
	);
};
