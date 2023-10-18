import { PropsComponent } from '@/utils/interfaces-types/component';

const CardBody: React.FC<PropsComponent> = ({ children, className }) => {
	return <div className={`Card-Body ${className}`}>{children}</div>;
};

export default CardBody;
