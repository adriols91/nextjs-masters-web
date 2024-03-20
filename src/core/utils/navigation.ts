import { Sort } from '@/gql/codegen/graphql';

import type { OrderByParam } from '../types';

export const removeTrailingSlash = (path: string) =>
	path === '/' ? path : path.replace(/\/$/, '');

export const parseOrderByParam = (sort: string): OrderByParam => {
	return {
		field: sort.slice(0, -1),
		direction: sort.slice(-1) === '↑' ? Sort.Asc : Sort.Desc,
	};
};
