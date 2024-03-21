'use client';

import { addItemToCart } from '@/components/actions';
import { useTypeSafeFormState } from '@/core/hooks';
import { Form, Select, type FormProps } from '@/core/ui';

import type { ProductDetailsFragment } from '@/gql/codegen/graphql';

import { getColorsChoices, getSizesChoices } from '../..//helpers';

import { AddToCartButton } from './AddToCartButton';
import { addItemToCartSchema } from './schema';

interface AddItemToCartFormProps extends Omit<FormProps, 'state' | 'action'> {
	product: ProductDetailsFragment;
}

export const AddItemToCartForm = ({ product, ...formProps }: AddItemToCartFormProps) => {
	const [state, action] = useTypeSafeFormState(addItemToCartSchema, async (formData) => {
		await addItemToCart(formData);
	});

	return (
		<Form {...formProps} state={state} action={action}>
			<input type="text" name="productId" value={product.id} hidden readOnly />
			<div className="flex items-center gap-4">
				<Select label="Color" name="color" options={getColorsChoices(product)} />
				<Select label="Size" name="size" options={getSizesChoices(product)} />
			</div>
			<AddToCartButton />
		</Form>
	);
};
