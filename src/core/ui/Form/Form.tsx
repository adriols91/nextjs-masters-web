'use client';

import { useEffect, useRef } from 'react';

import type { FormContract } from '@/core/types';

export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
	state?: FormContract | null;
	action: (form: FormData) => void;
}

export const Form = ({ children, state, action, ...props }: FormProps) => {
	const ref = useRef<HTMLFormElement>(null);

	useEffect(() => {
		if (state?.success) {
			ref.current?.reset();
		}
	}, [state]);

	return (
		<form {...props} ref={ref} action={action}>
			{children}
		</form>
	);
};
