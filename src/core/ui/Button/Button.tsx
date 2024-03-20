'use client';

import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	'data-testid'?: string;
}

export const Button = ({ children, className, disabled, ...buttonProps }: ButtonProps) => {
	return (
		<button
			type="submit"
			className={clsx(
				'mt-6 inline-flex w-full items-center justify-center rounded-lg bg-gradient-to-br from-orange-400 to-orange-600 px-8 py-2 text-sm font-medium text-violet-50 hover:from-orange-500 hover:to-orange-700 focus:border-orange-300 focus:outline-none focus:ring focus:ring-orange-200 focus:ring-opacity-50',
				disabled && 'cursor-not-allowed opacity-50',
				className,
			)}
			disabled={disabled}
			{...buttonProps}
		>
			{children}
		</button>
	);
};
