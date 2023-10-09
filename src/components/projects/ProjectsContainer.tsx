import React from 'react';
import Project from './Project';
import Card from '../card/Card';
import CardHeader from '@/components/card/card-header/CardHeader';
import CardBody from '../card/card-body/CardBody';

type Props = {};

const ProjectsContainer: React.FC<Props> = () => {
	const simu = [
		{ hola: 'hola' },
		{ hola: 'hola' },
		{ hola: 'hola' },
		{ hola: 'hola' },
		{ hola: 'hola' },
		{ hola: 'hola' },
		{ hola: 'hola' },
		{ hola: 'hola' },
		{ hola: 'hola' },
		{ hola: 'hola' },
		{ hola: 'hola' },
	];
	return (
		<>
			<Card>
				<CardHeader>
					<h2>holi</h2>
				</CardHeader>
				<CardBody>
					{simu.map(({ hola }) => {
						return (
							<>
								<Project hola={hola} />
							</>
						);
					})}
				</CardBody>
			</Card>
		</>
	);
};

export default ProjectsContainer;
