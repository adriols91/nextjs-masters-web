import { Loader } from 'lucide-react';

export const LoadingSpinner = () => {
	return (
		<div
			className="flex h-[50vh] w-full animate-spin items-center justify-center text-orange-500"
			aria-busy
		>
			<Loader size={50} />
		</div>
	);
};
