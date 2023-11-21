import Image from 'next/image';
import styles from './styles.module.scss';
import imgProfile from '@/assets/images/photo.jpeg';
const page = () => {
	return (
		<main className={styles.Main}>
			<header className={styles.Main_header}><h1>Sobre mí</h1></header>
			<div className={styles.Main_sectionImage}>
				<Image
					aria-label='profile'
					src={imgProfile}
					alt={'profile'}
					width={512}
					height={512}
				/>
			</div>
			<div className={styles.Main_section}>
				<section>
					<header><h2>holi</h2></header>
				</section>
			</div>
		</main>
	);
};

export default page;
