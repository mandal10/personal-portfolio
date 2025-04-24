import React from 'react'
import { FaGithub, FaGlobe } from 'react-icons/fa';


function ProjectsCard({ title, des, src }) {
    return (
        <div className='w-full  lg:px-10 px-3 py-10 rounded-lg shadow-lg  bg-gradient-to-r from-bodycolor to-[#202327] group
          hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024]  transition-colors duration-1000'>
            <div className='w-full  overflow-hidden rounded-lg '>
                <img className='w-full h-60 object-cover group-hover:scale-110 cursor-pointer duration-300' src={src} alt='src' />
            </div>

            <div className='w-full mt-5 '>
                <div className='flex items-center justify-between'>
                    <h3 className='text-base uppercase text-designcolor font-normal font-titlefont'>{title}</h3>

                    <div className='flex gap-2'>
                        <span className='text-lg  rounded-full inline-flex justify-center items-center text-gray-400 hover:text-designcolor cursor-pointer duration-300 '>
                            <FaGithub />

                        </span>
                        <span className='text-lg  rounded-full inline-flex justify-center items-center text-gray-400 hover:text-designcolor cursor-pointer duration-300 '>
                            <FaGlobe />

                        </span>

                    </div>

                </div>
                <p className='mt-3 text-sm tracking-wide hover:text-gray-100 duration-300'>{des}</p>


            </div>
        </div>
    )
}

export default ProjectsCard