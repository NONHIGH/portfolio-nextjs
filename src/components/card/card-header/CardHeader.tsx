import { PropsComponent } from '@/utils/interfaces-types/component';

const CardHeader: React.FC<PropsComponent> = ({ children, className }) => {
	return (
		<header className={`Card-Header ${className ? className : ''}`}>
			{children}
		</header>
	);
};

export default CardHeader;
