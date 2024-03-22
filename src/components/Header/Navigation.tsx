import type { MenuItem } from '@/core/types';
import { Link } from '@/core/ui';

export const Navigation = <T extends string>({ menuItems }: { menuItems: MenuItem<T>[] }) => {
	return (
		<nav className="flex lg:ml-8">
			<ul className="ml-[1rem] flex w-full gap-2 py-5 text-sm sm:gap-5 sm:text-base">
				{menuItems.map((item) => (
					<li key={item.label}>
						<Link
							href={item.href}
							className="text-orange-700 hover:border-b-2 hover:border-b-orange-700"
							activeClassName="border-b-2 border-b-orange-700"
							activeWhenExact={item.activeWhenExact}
						>
							{item.label}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};
