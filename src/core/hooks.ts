import { useEffect, useRef } from 'react';

import { useFormState } from 'react-dom';

import type { TypeOf, ZodType } from 'zod';

import type { FormContract } from './types';

export const usePrevious = <T>(value: T): T | undefined => {
	const ref = useRef<T>();

	useEffect(() => {
		ref.current = value;
	}, [value]);

	return ref.current;
};

export const useTypeSafeFormState = <FormSchema extends ZodType>(
	schema: FormSchema,
	action: (data: TypeOf<FormSchema>) => Promise<unknown>,
) => {
	return useFormState(
		async (_prevState: unknown, formData: FormData): Promise<FormContract<TypeOf<FormSchema>>> => {
			const parsedData = await schema.safeParseAsync(Object.fromEntries(formData));

			if (!parsedData.success) {
				return {
					success: false as const,
					errors: parsedData.error.flatten().fieldErrors as Partial<
						Record<keyof TypeOf<FormSchema>, string[]>
					>,
				};
			}
			const newState = {
				success: true as const,
				errors: {},
				response: parsedData.data as unknown,
			};
			await action(parsedData.data as unknown);

			return newState;
		},
		null,
	);
};
