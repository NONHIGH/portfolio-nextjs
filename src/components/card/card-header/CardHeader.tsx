import { PropsComponent } from '@/utils/interfaces/component';

const CardHeader: React.FC<PropsComponent> = ({ children, className }) => {
	return <header className={`Card-Header ${className}`}>{children}</header>;
};

export default CardHeader;
