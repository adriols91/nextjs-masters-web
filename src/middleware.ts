import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isProtectedRoute = createRouteMatcher([]);

const middleware = clerkMiddleware((auth, request) => {
	if (isProtectedRoute(request)) auth().protect();
});

export const config = {
	matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};

export default middleware;
