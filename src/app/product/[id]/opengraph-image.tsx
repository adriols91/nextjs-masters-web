import { ImageResponse } from 'next/og';

import { getClient } from '@/gql/client';
import { ProductGetItemDocument } from '@/gql/codegen/graphql';

export const runtime = 'edge';

export const alt = 'Next14masters store product';
export const size = {
	width: 1200,
	height: 630,
};

export const contentType = 'image/png';

const openGraphImage = async ({ params: { id } }: { params: { id: string } }) => {
	const {
		data: { product },
	} = await getClient().query({ query: ProductGetItemDocument, variables: { id } });

	if (!product) {
		return new ImageResponse(
			(
				<div tw="w-full text-slate-800 h-full flex flex-col items-center justify-center">
					<h1 tw="text-4xl font-bold">Product not found</h1>
				</div>
			),
		);
	}

	return new ImageResponse(
		(
			<div tw="w-full text-slate-800 h-full flex items-center justify-center bg-violet-400">
				<div tw="px-8 flex">
					{/*	eslint-disable-next-line @next/next/no-img-element */}
					<img
						src={product.coverImages[0]?.url.replace('webp', 'jpg')}
						alt={alt}
						tw="rounded-full w-96 h96 rounded-full shadow-lg"
					/>
					<div tw="flex flex-col ml-8 h-96 justify-center max-w-[60%]">
						<h1 tw="text-6xl font-bold text-orange-100">{product.name}</h1>
						<p tw="text-3xl text-orange-50">{product.description}</p>
						<p tw="text-3xl text-orange-100">Category: {product.categories[0]?.name}</p>
					</div>
				</div>
			</div>
		),
	);
};

export default openGraphImage;
