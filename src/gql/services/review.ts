import { getClient } from '../client';
import { ReviewCreateDocument, type ReviewDetailsFragment } from '../codegen/graphql';

interface ReviewData extends Omit<ReviewDetailsFragment, 'id'> {
	productId: string;
}

export const createReview = async (review: ReviewData) => {
	await getClient().mutate({
		mutation: ReviewCreateDocument,
		variables: {
			input: { ...review },
		},
	});
};
