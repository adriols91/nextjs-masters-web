import { PaymentForm } from '@/components';
import { Section, SectionTitle } from '@/core/ui';
import { formatPrice } from '@/core/utils';

const PaymentPage = async ({
	params: { intent },
	searchParams: { totalAmount },
}: {
	params: { intent: string };
	searchParams: { totalAmount: string };
}) => {
	return (
		<Section>
			<div className="flex min-h-[50vh] flex-col items-center justify-center">
				<SectionTitle title="Total amount">
					<p className="text-2xl font-bold italic text-orange-500">
						{formatPrice(parseInt(totalAmount))}
					</p>
				</SectionTitle>
				<PaymentForm clientSecret={intent} />
			</div>
		</Section>
	);
};

export default PaymentPage;
