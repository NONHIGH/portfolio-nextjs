import './card-styles.scss';
import { PropsComponent } from '@/utils/interfaces-types/component';

const Card: React.FC<PropsComponent> = ({ children, className }) => {
	return (
		<>
			<div className={`Card-Container ${className}`}>{children}</div>
		</>
	);
};

export default Card;
