import React from 'react'
import { bannerImg } from '../../assets/index';


function RightBanner() {
    return (
        <div className='w-[40%]  relative '>

            <img src={bannerImg} alt='banner' className='absolute z-10 w-full h-[415px] object-contain flex items-center justify-center' />


            <div className=' absolute bottom-0 w-full z-0 h-[300px] bg-gradient-to-r from-bodycolor to-[#202327]   flex items-center justify-center shadow-lg'>

            </div>
        </div>
    )
}

export default RightBanner