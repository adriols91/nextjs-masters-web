import clsx from 'clsx';

interface SectionTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
	title: string;
	titleClassName?: string;
}

export const SectionTitle = ({
	children,
	title,
	titleClassName,
	className,
	...headingProps
}: SectionTitleProps) => {
	return (
		<div className={clsx('mb-8 flex w-full items-center justify-between', className)}>
			<h2
				className={clsx(
					'whitespace-nowrap text-2xl font-bold tracking-tight text-slate-800',
					titleClassName,
				)}
				{...headingProps}
			>
				{title}
			</h2>
			{children}
		</div>
	);
};
