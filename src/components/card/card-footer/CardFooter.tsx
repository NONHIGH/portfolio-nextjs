import { PropsComponent } from '@/utils/interfaces/component';

const CardFooter: React.FC<PropsComponent> = ({ children, className }) => {
	return <footer className={`Card-Footer ${className}`}>{children}</footer>;
};

export default CardFooter;
