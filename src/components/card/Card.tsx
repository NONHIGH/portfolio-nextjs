import './card-styles.scss';
import { PropsComponent } from '@/utils/interfaces/component';

const Card: React.FC<PropsComponent> = ({ children, className }) => {
	return (
		<>
			<section className={`Card-Container ${className}`}>{children}</section>
		</>
	);
};

export default Card;
