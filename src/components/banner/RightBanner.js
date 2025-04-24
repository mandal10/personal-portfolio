import React from 'react'
import { bannerImg } from '../../assets/index';


function RightBanner() {
    return (
        <div className='w-full lgl:w-1/2   '>

            <div className='relative'>

                <img src={bannerImg} alt='banner' className=' z-10 w-full h-[415px] object-contain flex items-center justify-center' />



            </div>
        </div>
    )
}

export default RightBanner