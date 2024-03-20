interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label: string;
}

export const TextField = ({ label, ...inputProps }: TextFieldProps) => {
	return (
		<label>
			<span className="text-xs text-gray-700">{label}</span>
			<input
				className="mt-1 block w-full rounded-md border border-gray-300 px-2 py-1 text-sm font-light shadow-sm focus:border-orange-300 focus:outline-none focus:ring focus:ring-orange-200 focus:ring-opacity-50"
				{...inputProps}
			/>
		</label>
	);
};
