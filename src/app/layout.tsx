import { Suspense } from 'react';

import type { Metadata } from 'next';

import { ClerkProvider } from '@clerk/nextjs';
import clsx from 'clsx';

import { Inter } from 'next/font/google';

import './globals.css';
import { Header } from '@/components';
import { Providers } from '@/core/providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Next.js masters',
	description: 'Next.js masters app',
	metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL as string),
};

const RootLayout = async ({
	children,
	modal,
}: Readonly<{
	children: React.ReactNode;
	modal: React.ReactNode;
}>) => {
	return (
		<ClerkProvider>
			<html lang="pl">
				<body className={clsx(inter.className, 'min-w-[320px]')}>
					<Providers>
						<Header />
						<div className="container mb-16 min-h-[50vh] rounded-b-lg border border-t-0 shadow-xl">
							<main className="flex flex-grow flex-col">{children}</main>
							<footer className="mt-4 flex h-16 items-center justify-center border-t">
								<p className="text-center text-xs leading-7 text-slate-500">
									© 2024 Next.js Masters
								</p>
							</footer>
						</div>
						{modal && <Suspense>{modal}</Suspense>}
					</Providers>
				</body>
			</html>
		</ClerkProvider>
	);
};

export default RootLayout;
