/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'http',
				hostname: 'localhost',
				port: '4000',
			},
		],
	},
	experimental: {
		typedRoutes: true,
	},
	redirects: async () => {
		return [
			{
				source: '/categories/:slug',
				destination: '/categories/:slug/1',
				permanent: true,
			},
			{
				source: '/collections/:slug',
				destination: '/collections/:slug/1',
				permanent: true,
			},
			{
				source: '/products',
				destination: '/products/1',
				permanent: true,
			},
		];
	},
	logging: {
		fetches: {
			fullUrl: true,
		},
	},
};

export default nextConfig;
