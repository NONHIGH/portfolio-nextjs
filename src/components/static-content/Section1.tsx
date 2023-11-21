import Image from 'next/image';
import styles from './styles.module.scss';
import logo from '@/assets/images/logo.png';
import tecnologies from '@/assets/svg-tsx/tecnologies';
import React from 'react';
import Link from 'next/link';

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
				<div className={styles.Banner__content__tecnologies}>
					{tecnologies.map(({ link, name, svg }, index) => {
						return (
							<React.Fragment key={index}>
								<Link href={link} target='_blank'>
									{svg(index)}
									<span>{name}</span>
								</Link>
							</React.Fragment>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Section1;
