import { PropsComponent } from '@/utils/interfaces-types/component';

const CardFooter: React.FC<PropsComponent> = ({ children, className }) => {
	return <footer className={`Card-Footer ${className ? className : ''}`}>{children}</footer>;
};

export default CardFooter;
