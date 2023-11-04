import React from 'react';
import styles from './styles.module.scss';
import Icons from '@/assets/svg-tsx';
import Link from 'next/link';
type Props = {};

const Footer: React.FC<Props> = () => {
	return (
		<footer className={styles.Footer}>
			<ul className={styles.Footer__ul}>
				{Icons.map(({ link, name, svg }, id) => {
					return (
						<React.Fragment key={id}>
							<li>
								<Link href={link} target='_blank'>
									<span>{svg(id)}</span>
                  <span>{name}</span>
								</Link>
							</li>
						</React.Fragment>
					);
				})}
			</ul>
		</footer>
	);
};

export default Footer;
