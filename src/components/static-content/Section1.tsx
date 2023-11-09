import Image from 'next/image';
import styles from './styles.module.scss';
import logo from '@/assets/logo.png';

type Props = {};

const Section1: React.FC<Props> = () => {
	return (
		<section className={styles.Banner}>
			<div className={styles.Banner__content}>
				<h1 className={styles.Banner__content__title}>
					Desarrollador full stack
				</h1>
				<Image
					src={logo}
					width={100}
					height={100}
					alt={'logo'}
					priority={true}></Image>
			</div>
		</section>
	);
};

export default Section1;
