import React from 'react'
import LeftBanner from './LeftBanner';
import RightBanner from './RightBanner';
function Banner() {

    return (
        <section id='home' className='w-full h-full  py-20  gap-20 flex flex-col lgl:flex-row lgl:justify-between border-b border-black font-titlefont  lgl:px-16 sm:px-10 px-5'>
            <LeftBanner />
            <RightBanner />


        </section>
    )
}

export default Banner