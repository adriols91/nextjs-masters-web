import { SignIn } from '@clerk/nextjs';

const SignInPage = () => {
	return (
		<div className="flex min-h-[60vh] flex-col items-center justify-center">
			<SignIn />
		</div>
	);
};

export default SignInPage;
