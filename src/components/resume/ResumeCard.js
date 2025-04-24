import React from 'react'

function ResumeCard({ title, subtitle, result, des }) {
    return (
        <div className='w-full h-1/3 group flex'>

            <div className="lg:w-10 w-4 h-[6px] bgOpacity mt-16 relative">
                <span className='absolute w-5 h-5 rounded-full -top-2 -left-3 justify-center items-center bg-black bg-opacity-60'>
                    <span className='w-3 h-3 rounded-full bg-bodycolor  group-hover:bg-designcolor duration-300 top-1 left-1 absolute'></span>
                </span>
            </div>

            <div className='w-full bg-black bg-opacity-20 hover:bg-opacity-30 duration-300 rounded-lg lg:px-10 px-3 flex flex-col justify-center lg:gap-10 gap-3 shadow-lg py-5 lg:py-0'>
                <div className='flex flex-col lg:flex-row justify-between lg:items-center items-start gap-3'>
                    <div>
                        <h3 className="text-2xl font-semibold gorup-hover:text-white duration-300">{title}</h3>
                        <p className='text-sm mt-2 text-gray-400 gorup-hover:text-white duration-300'>{subtitle}</p>
                    </div>
                    <p className='w-20 h-10 text-designcolor bg-black bg-opacity-25 rounded-lg flex justify-center items-center shadow-lg text-sm font-medium'>{result}</p>
                </div>
                <p className='text-base font-medium text-gray-400 group-hover:text-gray-300 duration-300'>{des}</p>

            </div>
        </div>
    )
}

export default ResumeCard