import { useFormStatus } from 'react-dom';

import { Button } from '@/core/ui';

export const AddToCartButton = () => {
	const { pending } = useFormStatus();

	return (
		<Button className="py-4" disabled={pending} data-testid="add-to-cart-button">
			Add to cart
		</Button>
	);
};
