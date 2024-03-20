'use client';

import { ApolloWrapper } from './ApolloWrapper';

export const Providers = ({ children }: React.PropsWithChildren) => {
	return <ApolloWrapper>{children}</ApolloWrapper>;
};
