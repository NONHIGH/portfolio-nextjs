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
				<CardBody className={`${styles.body}`}>
					<div className={styles.CardProject__img}>
						<Image
							alt={project.presentationImage}
							src={project.presentationImage}
							width={4000}
							height={4000}
						/>
					</div>

					<section>
						<h4>Descripción:</h4>
						<p>{project.description}</p>
					</section>
				</CardBody>
			</Card>
		</>
	);
};

export default Project;
