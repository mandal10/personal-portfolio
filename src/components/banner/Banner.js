import React from 'react'
import LeftBanner from './LeftBanner';
import RightBanner from './RightBanner';
function Banner() {

    return (
        <section id='home' className='w-full  pt-20 pb-20 gap-20 flex  justify-between border-b border-black font-titlefont  px-16'>
            <LeftBanner />
            <RightBanner />


        </section>
    )
}

export default Banner