import { loadEnvConfig } from '@next/env';

import type { CodegenConfig } from '@graphql-codegen/cli';

loadEnvConfig(process.cwd());

const config: CodegenConfig = {
	overwrite: true,
	ignoreNoDocuments: true,
	schema: process.env.API_URL || 'http://localhost:4000/graphql',
	documents: 'src/gql/operations/**/*.gql',
	generates: {
		'src/gql/codegen/': {
			preset: 'client',
			plugins: [],
			presetConfig: {
				fragmentMasking: false,
			},
			config: {
				useTypeImports: true,
				defaultScalarType: 'unknown',
				skipTypename: true,
			},
		},
	},
};

export default config;
