import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/components/**/*.{js,ts,tsx,mdx}',
		'./src/core/**/*.{js,ts,tsx,mdx}',
		'./src/app/**/*.{js,ts,tsx,mdx}',
	],
	theme: {
		container: {
			center: true,
			padding: '1rem',
			screens: {
				xl: '80rem',
				'2xl': '80rem',
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
};

export default config;
