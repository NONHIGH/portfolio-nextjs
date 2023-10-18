import React from 'react';
import Project from './Project';
import { Card, CardBody, CardFooter, CardHeader } from '@/components/card'
import styles from './styles.module.scss'
import { projects } from '@/utils/interfaces-types/project';

type Props = {};



const ProjectsContainer: React.FC<Props> = () => {
	const simu : projects = [
		{ id: 'diosito', name: 'NOmbre de proyecto', presentationImage: 'https://images.unsplash.com/photo-1580757468214-c73f7062a5cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80', tecnologies: [{name: 'Angular', version: '15.6.2'}], description: "Esta es una breve descripcion sobre el proyecto que prepare para que pueda ser visible a la comunidad y para los reclutadores " },
		{ id: 'joser', name: 'NOmbre de proyecto', presentationImage: 'https://images.unsplash.com/photo-1580757468214-c73f7062a5cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80', tecnologies: [{name: 'Angular', version: '15.6.2'}], description: "Esta es una breve descripcion sobre el proyecto que prepare para que pueda ser visible a la comunidad y para los reclutadores " },
		{ id: 'mamamids', name: 'NOmbre de proyecto', presentationImage: 'https://images.unsplash.com/photo-1580757468214-c73f7062a5cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80', tecnologies: [{name: 'Angular', version: '15.6.2'}], description: "Esta es una breve descripcion sobre el proyecto que prepare para que pueda ser visible a la comunidad y para los reclutadores " },
		{ id: 'diossiis', name: 'NOmbre de proyecto', presentationImage: 'https://images.unsplash.com/photo-1580757468214-c73f7062a5cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80', tecnologies: [{name: 'Angular', version: '15.6.2'}], description: "Esta es una breve descripcion sobre el proyecto que prepare para que pueda ser visible a la comunidad y para los reclutadores " },
		{ id: 'disisdyjrte', name: 'NOmbre de proyecto', presentationImage: 'https://images.unsplash.com/photo-1580757468214-c73f7062a5cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80', tecnologies: [{name: 'Angular', version: '15.6.2'}], description: "Esta es una breve descripcion sobre el proyecto que prepare para que pueda ser visible a la comunidad y para los reclutadores " },
		
	];
	return (
		<>
			<Card>
				<CardHeader>
					<h1 className='font-bold text-center'>Mi trayectoria</h1>
				</CardHeader>
				<CardBody className={styles.Projects}>
					{simu.map((project) => {
						return (
							<React.Fragment key={project.id}>
								<Project project={project} />
							</React.Fragment>
						);
					})}
				</CardBody>
				<CardFooter>
					holi2
				</CardFooter>
			</Card>
		</>
	);
};

export default ProjectsContainer;
