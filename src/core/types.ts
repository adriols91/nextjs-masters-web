import type { Route } from 'next';

import type { Sort } from '@/gql/codegen/graphql';

export type MenuItem<T extends string> = {
	label: string;
	href: Route<T>;
	activeWhenExact?: boolean;
};

export type OrderByParam = {
	field: string;
	direction: Sort;
};

export type FormContract<
	TData = unknown,
	TErrors extends Partial<Record<keyof TData, string[]>> = Partial<Record<keyof TData, string[]>>,
> =
	| {
			success: true;
			errors: TErrors;
			response: TData;
	  }
	| { success: false; errors: TErrors };
