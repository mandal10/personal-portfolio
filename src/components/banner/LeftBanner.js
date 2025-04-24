import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { FaFacebookF, FaTwitter, FaLinkedin, FaReact } from 'react-icons/fa';
import { SiTailwindcss, SiBootstrap, SiCss3, SiHtml5 } from 'react-icons/si';


function LeftBanner() {
    const [text] = useTypewriter({
        words: ['Professinal Coder.', 'Full Stack Developer', 'Website Designer'],
        loop: true,
        typeSpeed: 70,
        deleteSpeed: 50,
        delaySpeed: 2000

    });
    return (
        < >
            <div className='w-[60%] flex flex-col gap-14 '>
                <div className='flex flex-col gap-5'>
                    <h4 className='uppercase text-lg font-normal'>Welcome to my World</h4>
                    <h1 className='text-6xl font-bold text-white'
                    >Hi,I 'm {' '}
                        <span className='capitalize text-designcolor'>John Doe</span>
                    </h1>
                    <h2 className='text-white font-bold text-4xl'>a <span>{text}</span>
                        <Cursor
                            cursorBlinking="false"
                            cursorStyle="|"
                            cursorColor='#ff014f'
                        />
                    </h2>
                    <p className='font-bodyfont'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>

                <div className='flex justify-between'>
                    <div>
                        <h2 className='text-base uppercase font-titlefont mb-4'>
                            Find me in
                        </h2>

                        <div className='flex gap-4'>
                            <span className='bannerIcon'>
                                <FaFacebookF />
                            </span>
                            <span className='bannerIcon'>
                                <FaTwitter />
                            </span>
                            <span className='bannerIcon'>
                                <FaLinkedin />
                            </span>
                        </div>
                    </div>
                    <div>
                        <h2 className='text-base uppercase font-titlefont mb-4'>
                            best skill on
                        </h2>

                        <div className='flex gap-4'>
                            <span className='bannerIcon'>
                                <SiHtml5 />
                            </span>
                            <span className='bannerIcon'>
                                <SiCss3 />
                            </span>
                            <span className='bannerIcon'>
                                <SiTailwindcss />
                            </span>

                            <span className='bannerIcon'>
                                <SiBootstrap />
                            </span>

                            <span className='bannerIcon'>
                                <FaReact />
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default LeftBanner