'use client';
import styles from './styles.module.scss';
import Link from 'next/link';
import { navigation } from '@/utils/navigation';
import logo from '@/app/assets/logo.jpeg';
import React from 'react';
import Image from 'next/image';
import burger from '@/app/assets/svg/burger.svg';
import xmark from '@/app/assets/svg/x-mark.svg';

const Navbar: React.FC = () => {
	return (
		<React.Fragment>
			<header className={`${styles.Header}`}>
				<nav className={`${styles.Navbar}`}>
					<Link href={'/'} className={`${styles.logo}`}>
						<Image src={logo} alt={'nonhigh'} />
					</Link>
					<input type='checkbox' id='toggle' className={styles.toggle}/>
					<label htmlFor='toggle' className={`${styles.icons}`}>
						<Image
							src={burger}
							alt='icon-burger'
							className={`${styles.burgerO}`}
							id='open'
						/>
						<Image src={xmark} alt='icon-burger' className={`${styles.burgerX}`} />
					</label>

					<ul className={`${styles.NavLinks}`}>
						{navigation.map(({ label, path }) => {
							return (
								<React.Fragment key={label + path}>
									<li>
										<Link href={path} target={path.length > 10 ? '_blank' : ''}>
											{label}
										</Link>
									</li>
								</React.Fragment>
							);
						})}
					</ul>
				</nav>
			</header>
		</React.Fragment>
	);
};

export default Navbar;
