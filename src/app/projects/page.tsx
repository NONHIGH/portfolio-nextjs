import ProjectsContainer from '@/components/projects/ProjectsContainer';
import React from 'react';

type Props = {};

const page: React.FC<Props> = ({}) => {
	return (
		<>
			<main>
				<h1 className='text-center underline pb-5'>Proyectos</h1>
				<ProjectsContainer />
			</main>
		</>
	);
};

export default page;
