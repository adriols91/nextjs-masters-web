import * as zod from 'zod';

export const reviewSchema = zod.object({
	productId: zod.string(),
	headline: zod.string().min(2).max(100),
	content: zod.string().min(2).max(1000),
	rating: zod.string(),
	name: zod.string().min(2).max(50),
	email: zod.string().email(),
});

export type ReviewFormData = zod.infer<typeof reviewSchema>;
