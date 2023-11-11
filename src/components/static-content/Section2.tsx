import React from 'react';
import { Card, CardBody, CardHeader } from '../card';
import { educations, experiences } from './static-data';
import styles from './styles.module.scss';
import CardFooter from '../card/card-footer/CardFooter';
import { icons } from './static-icons';

type Props = {};

const Section2: React.FC<Props> = () => {
	return (
		<Card className={styles.SectionContainer}>
			<CardBody className={styles.SectionContainer__sections}>
				<Card className={styles.SectionContainer__sections__experience}>
					<CardHeader>
						<h2>Experiencia</h2>
					</CardHeader>
					<CardBody className='flex flex-wrap'>
						{experiences.map(
							(
								{ title, placeOrEmployer, start, end, tasks, typeOfWork },
								index
							) => {
								return (
									<React.Fragment key={index}>
										<Card
											className={
												styles.SectionContainer__sections__experience__item
											}>
											<CardHeader>
												<h3>{title}</h3>
											</CardHeader>
											<CardBody className='m-5 '>
												<p>{placeOrEmployer}</p>
											</CardBody>
											<CardFooter className='flex justify-end'>
												<span>
													{start.toLocaleDateString()} -{' '}
													{end.toLocaleDateString()}
												</span>
											</CardFooter>
										</Card>
									</React.Fragment>
								);
							}
						)}
					</CardBody>
				</Card>
				<Card className={styles.SectionContainer__sections__education}>
					<CardHeader>
						<h2>Educación</h2>
					</CardHeader>
					<CardBody className='flex flex-wrap'>
						{educations.map(({ title, end, institution, start }, index) => {
							return (
								<React.Fragment key={index * 392}>
									<Card
										className={
											styles.SectionContainer__sections__education__item
										}>
										<CardHeader className='flex justify-between items-center'>
											<div>{icons[index]('')}</div>
											<h3 className='inline-flex'>{title}</h3>
										</CardHeader>
										<CardBody className='m-5'>
											<p>{institution}</p>
										</CardBody>
										<CardFooter className='flex justify-end'>
											<span>
												{start.toLocaleDateString()} -{' '}
												{end.toLocaleDateString()}
											</span>
										</CardFooter>
									</Card>
								</React.Fragment>
							);
						})}
					</CardBody>
				</Card>
			</CardBody>
		</Card>
	);
};

export default Section2;
