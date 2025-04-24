import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
function Card({ title, des, icon }) {
    return (
        <div className='w-full  px-12 py-10 rounded-lg shadow-lg flex  bg-gradient-to-r from-bodycolor to-[#202327] group
          hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024]  transition-colors duration-300'>
            <div className='h-72 overflow-y-hidden'>
                <div className='flex flex-col h-full gap-8 translate-y-14 group-hover:translate-y-0 transition-transform duration-500'>
                    <div>
                        <span className='text-5xl text-designcolor'>{icon}</span>


                    </div>
                    <div className='flex flex-col gap-6'>
                        <h2 className='text-2xl font-titlefont font-bold text-gray-300'>{title}</h2>

                        <p className='base'>{des}</p>
                        <span className='text-2xl text-designcolor'>
                            <FaArrowRight />
                        </span>


                    </div>

                </div>
            </div>
        </div>

    )
}

export default Card