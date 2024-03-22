import { revalidateTag } from 'next/cache';
import { NextResponse, type NextRequest } from 'next/server';

export const GET = (request: NextRequest) => {
	const tag = request.nextUrl.searchParams.get('tag');
	const token = request.nextUrl.searchParams.get('token');

	if (token !== process.env.REVALIDATE_TOKEN) {
		return NextResponse.json({ message: 'Authorization required' }, { status: 401 });
	}
	if (!tag) {
		return NextResponse.json({ message: 'Tag required' }, { status: 400 });
	}
	revalidateTag(tag);

	return NextResponse.json({ revalidated: true, now: Date.now() });
};
