import { Suspense } from 'react';

import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { ShoppingBag } from 'lucide-react';

import { Link, SearchInput } from '@/core/ui';
import { getCart } from '@/gql/services';

import { Navigation } from './Navigation';

export const Header = async () => {
	const cart = await getCart();

	return (
		<header className="flex h-auto max-h-[45vh] flex-col items-center bg-gradient-to-b from-violet-500 to-violet-300 md:h-screen">
			<div className="container m-auto flex h-16 items-center justify-between gap-2 px-0 py-2">
				<Link
					href="/"
					className="px-3 text-center text-sm font-bold text-orange-200 hover:text-orange-300 sm:whitespace-nowrap md:text-2xl xl:px-0"
					activeClassName=""
				>
					Next.js Masters
				</Link>
				<Suspense>
					<SearchInput />
				</Suspense>
				<div className="flex items-center gap-4">
					<Link
						href="/cart"
						className="mx-2 flex h-full items-center justify-center border-b-2 border-transparent text-center text-sm font-medium text-orange-100 hover:text-orange-200 xl:mx-0"
						activeClassName="text-orange-200 pointer-events-none"
					>
						<ShoppingBag />
						<div className="w-4">
							<span className="ml-2 text-sm font-medium ">{cart?.items.length || 0}</span>
							<span className="sr-only">items in cart, view bag</span>
						</div>
					</Link>
					<SignedIn>
						<div className="pr-2 xl:pr-0">
							<UserButton />
						</div>
					</SignedIn>
					<SignedOut>
						<div className="whitespace-nowrap pr-2 text-orange-100 hover:text-orange-200 xl:pr-0">
							<SignInButton />
						</div>
					</SignedOut>
				</div>
			</div>
			<div className="container mt-auto h-5/6 bg-[url('/header-bg.webp')] bg-cover bg-[center_left_25%] shadow-xl xl:rounded-t-lg">
				<Navigation
					menuItems={[
						{ label: 'Home', href: '/' },
						{ label: 'All', href: '/products', activeWhenExact: false },
						{ label: 'Collections', href: '/collections', activeWhenExact: false },
						{ label: 'Categories', href: '/categories', activeWhenExact: false },
						{ label: 'Shoes', href: '/categories/shoes', activeWhenExact: false },
					]}
				/>
				<div className="flex flex-col items-center justify-center gap-y-4 py-6 text-center sm:w-3/5 lg:w-2/5 xl:h-2/3">
					<p className="text-2xl font-bold text-orange-600 xl:text-4xl">Fashion in Your Style</p>
					<p className="font-bold text-orange-500 xl:text-3xl">Discover, Fall in Love, Wear!</p>
					<Link
						href="/products"
						className="mt-4 rounded-3xl border-2 border-orange-500 px-6 py-3 font-bold text-orange-600 hover:border-orange-600 hover:text-orange-700"
					>
						Check out our products {'-->'}
					</Link>
				</div>
			</div>
		</header>
	);
};
