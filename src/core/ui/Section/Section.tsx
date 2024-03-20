interface SectionProps extends React.HTMLAttributes<HTMLElement> {}

export const Section = ({ children, ...sectionProps }: SectionProps) => {
	return (
		<section className="px-4 py-8" {...sectionProps}>
			{children}
		</section>
	);
};
