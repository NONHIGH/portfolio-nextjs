import ProjectsContainer from '@/components/projects/ProjectsContainer'
import React from 'react'

type Props = {
    
}

const page = (props: Props) => {
  return (
    <>
        <main>
            <h1 className='text-center underline'>Proyectos</h1>
            <h2 className='text-center'>holi</h2>
            <ProjectsContainer/>
        </main>
    </>
  )
}

export default page