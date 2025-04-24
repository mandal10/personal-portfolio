import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from '../../assets/index'


import ProjectsCard from './ProjectsCard'

function Project() {
    return (
        <section id="projects" className='w-full  py-20  border-b border-black  px-16'>
            <div className='text-center '>
                <Title title='VISIT MY PORTFOLIO AND KEEP YOR FEEDBACK' des='my Projects' />
            </div>
            <div className='grid grid-cols-3 gap-10 '>
                <ProjectsCard
                    title="Social Media Clone"
                    des="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                    src={projectOne}
                />
                <ProjectsCard
                    title="E-commerce Website"
                    des="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                    src={projectTwo}

                />
                <ProjectsCard
                    title="Chatting App"
                    des="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                    src={projectThree}
                />
                <ProjectsCard
                    title="Chatting App"
                    des="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                    src={projectThree}
                />
                <ProjectsCard
                    title="Social Media Clone"
                    des="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                    src={projectOne}
                />
                <ProjectsCard
                    title="E-commerce Website"
                    des="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                    src={projectTwo}

                />





            </div>
        </section>
    )
}

export default Project