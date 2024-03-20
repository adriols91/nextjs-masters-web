'use client';

import clsx from 'clsx';

import { addReview } from '@/components/actions';
import { useTypeSafeFormState } from '@/core/hooks';
import { Button, Form, RatingField, TextField, Textarea, type FormProps } from '@/core/ui';

import { FieldErrors } from '@/core/ui/Form';

import type { ReviewDetailsFragment } from '@/gql/codegen/graphql';

import { reviewSchema } from './schema';

interface ReviewFormProps extends Omit<FormProps, 'state' | 'action'> {
	productId: string;
	addOptimisticReview: (review: ReviewDetailsFragment) => void;
}

export const ReviewForm = ({
	productId,
	addOptimisticReview,
	className,
	...formProps
}: ReviewFormProps) => {
	const [state, action] = useTypeSafeFormState(reviewSchema, async (formData) => {
		addOptimisticReview({
			id: '__optimistic__',
			title: formData.headline,
			description: formData.content,
			author: formData.name,
			email: formData.email,
			rating: parseInt(formData.rating),
		});
		await addReview(formData);
	});
	const errors = state?.errors;

	return (
		<Form
			{...formProps}
			state={state}
			action={action}
			className={clsx('flex flex-col gap-y-2', className)}
			data-testid="add-review-form"
		>
			<input type="hidden" value={productId} name="productId" />
			<TextField label="Review title" name="headline" required />
			{errors?.headline && <FieldErrors messages={errors.headline} />}
			<Textarea label="Review content" name="content" required />
			{errors?.content && <FieldErrors messages={errors.content} />}
			<RatingField />
			{errors?.rating && <FieldErrors messages={errors.rating} />}
			<TextField label="Name" name="name" required />
			{errors?.name && <FieldErrors messages={errors.name} />}
			<TextField label="E-mail" name="email" type="email" required />
			{errors?.email && <FieldErrors messages={errors.email} />}
			<Button>Submit review</Button>
		</Form>
	);
};
