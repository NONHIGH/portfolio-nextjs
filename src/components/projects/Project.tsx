'use client';

import React, { useState } from 'react';
import { project } from '../../utils/interfaces-types/project';
import Image from 'next/image';
import styles from './style.module.scss';
import { Card, CardBody, CardHeader } from '../card';
import Link from 'next/link';

type Props = {
	project: project;
};

const Project: React.FC<Props> = ({ project }) => {
	const [open, setOpen] = useState(false);
	const toggle = (): void => {
		setOpen(!open);
		console.log(open, 'stado ');
		console.log(styles);
		console.log(project.id);
		
		
	};
	return (
		<>
			<Card className={`${styles.CardProject}`}>
				<CardHeader>
					<h3 className='text-center'>{project.name}</h3>
				</CardHeader>
				<CardBody>
					<div className={styles.CardProject__img}>
						<Image
							alt={project.presentationImage}
							src={project.presentationImage}
							width={4000}
							height={4000}
						/>
					</div>
					<hr />

					<section className={open ? `${styles.open}` : ``}>
						<h4>
							<a href={`#${project.id}`} onClick={toggle}>
								Descripción
							</a>
						</h4>
						<p id={`${project.id}`} className={open ? styles.open : ''}>
							{project.description} holi
						</p>
					</section>
				</CardBody>
			</Card>
		</>
	);
};

export default Project;
