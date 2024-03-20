'use client';

import { useRef } from 'react';

import type { FormContract } from '@/core/types';

export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
	state?: FormContract | null;
	action: (form: FormData) => void;
}

export const Form = ({ children, state, action, ...props }: FormProps) => {
	const ref = useRef<HTMLFormElement>(null);

	return (
		<form
			{...props}
			ref={ref}
			action={(form) => {
				action(form);

				if (state?.success) {
					ref.current?.reset();
				}
			}}
		>
			{children}
		</form>
	);
};
