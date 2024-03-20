import clsx from 'clsx';

export type SelectOption = {
	label: string;
	value: string;
	props?: React.OptionHTMLAttributes<HTMLOptionElement> & { 'data-testid'?: string };
};

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
	label?: string;
	options: readonly SelectOption[];
}

export const Select = ({ label, options, className, ...selectProps }: SelectProps) => {
	const renderField = () => (
		<select
			className={clsx(
				'mt-1 block rounded-md border border-violet-200 bg-violet-50 px-2 py-1 text-sm font-light shadow-sm focus:border-orange-300 focus:outline-none focus:ring focus:ring-orange-200 focus:ring-opacity-50',
				className,
			)}
			{...selectProps}
		>
			{options.map((option) => (
				<option key={option.value} value={option.value} {...option.props}>
					{option.label}
				</option>
			))}
		</select>
	);

	return label ? (
		<label>
			<span className="text-xs text-gray-700">{label}</span>
			{renderField()}
		</label>
	) : (
		renderField()
	);
};
