export const FieldErrors = ({ messages }: { messages: string[] }) => {
	return messages.map((message, i) => (
		<p key={i} className="text-sm text-red-600">
			{message}
		</p>
	));
};
