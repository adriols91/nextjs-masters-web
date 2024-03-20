'use client';

import type { UrlObject } from 'url';

import type { Route } from 'next';

import clsx from 'clsx';
import NextLink, { type LinkProps as NextLinkProps } from 'next/link';
import { usePathname } from 'next/navigation';

import { removeTrailingSlash } from '@/core/utils';

interface LinkProps<T extends string> extends React.PropsWithChildren<NextLinkProps<T>> {
	href: Route<T> | UrlObject;
	activeWhenExact?: boolean;
	activeClassName?: string;
	activeProps?: Omit<NextLinkProps<T>, 'href'>;
}

export const Link = <T extends string>({
	children,
	href,
	className,
	activeWhenExact = true,
	activeClassName = 'border-b-2 border-b-orange-400',
	activeProps = {},
	...linkProps
}: LinkProps<T>) => {
	const pathname = usePathname();

	const isUrlObject = typeof href === 'object' && href !== null;

	const linkHref = isUrlObject ? href.pathname || '' : removeTrailingSlash(href);
	const isActive = activeWhenExact ? pathname === linkHref : pathname.startsWith(linkHref);

	return (
		<NextLink
			href={href}
			className={clsx([className, isActive && activeClassName])}
			{...linkProps}
			{...(isActive && { 'aria-current': 'page', ...activeProps })}
		>
			{children}
		</NextLink>
	);
};
