import { SignUp } from '@clerk/nextjs';

const SignUpPage = () => {
	return (
		<div className="flex min-h-[60vh] flex-col items-center justify-center">
			<SignUp />
		</div>
	);
};

export default SignUpPage;
