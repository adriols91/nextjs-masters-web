import { CartModalView } from '@/components';
import { Overlay } from '@/core/ui';

const CartModal = async () => {
	return (
		<aside className="animation-fade-in fixed inset-0 z-20 backdrop-blur-md">
			<Overlay />
			<CartModalView />
		</aside>
	);
};

export default CartModal;
