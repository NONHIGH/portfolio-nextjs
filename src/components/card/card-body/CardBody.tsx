import { PropsComponent } from '@/utils/interfaces/component';

const CardBody: React.FC<PropsComponent> = ({ children, className }) => {
	return <div className={`Card-Body ${className}`}>{children}</div>;
};

export default CardBody;
