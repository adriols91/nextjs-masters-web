'use server';

export const executeAction = async (
	form: FormData,
	action: (payload: FormData) => void,
	ref: React.RefObject<HTMLFormElement>,
) => {
	if (typeof action !== 'function') return;

	action(form);

	ref.current?.reset();
};
