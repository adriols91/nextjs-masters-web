'use client';

import { useRouter } from 'next/navigation';
import { useQueryState } from 'nuqs';

import { Select } from '@/core/ui';

import { POPULARITY_DESC, options } from './const';

export const OrderBySelect = () => {
	const router = useRouter();
	const [orderBy, setOrderBy] = useQueryState('orderBy', { defaultValue: POPULARITY_DESC });

	const handleChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
		await setOrderBy(e.target.value);

		router.refresh();
	};

	return (
		<div className="flex w-full justify-end">
			<Select options={options} value={orderBy} onChange={handleChange} />
		</div>
	);
};
