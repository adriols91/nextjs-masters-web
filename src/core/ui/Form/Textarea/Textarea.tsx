interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
	label: string;
}

export const Textarea = ({ label, ...textareaProps }: TextareaProps) => {
	return (
		<label>
			<span className="text-xs text-gray-700">{label}</span>
			<textarea
				className="mt-1 block max-h-48 min-h-[2.5rem] w-full rounded-md border border-gray-300 px-2 py-1 text-sm font-light shadow-sm  focus:border-orange-300 focus:outline-none focus:ring focus:ring-orange-200 focus:ring-opacity-50"
				{...textareaProps}
			/>
		</label>
	);
};
