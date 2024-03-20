import clsx from 'clsx';
import NextImage, { type ImageProps as NextImageProps } from 'next/image';

interface CoverImageProps extends Omit<NextImageProps, 'src'> {
	src?: NextImageProps['src'];
	keepAspectRatio?: boolean;
}

export const CoverImage = ({ src, alt, keepAspectRatio, ...imageProps }: CoverImageProps) => {
	return (
		<div className="relative h-full w-full overflow-hidden">
			<NextImage
				src={src || '/no-image.webp'}
				alt={alt}
				className={clsx(
					'rounded-lg object-cover transition-transform duration-500 hover:scale-105',
					keepAspectRatio && 'h-auto w-full',
				)}
				sizes="100vw"
				{...(keepAspectRatio
					? {
							width: 0,
							height: 0,
						}
					: { fill: true })}
				{...imageProps}
			/>
		</div>
	);
};
