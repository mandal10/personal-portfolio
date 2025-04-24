import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { FaFacebookF, FaTwitter, FaLinkedin, FaReact } from 'react-icons/fa';
import { SiTailwindcss, SiBootstrap, SiCss3, SiHtml5 } from 'react-icons/si';


function LeftBanner() {
    const [text] = useTypewriter({
        words: ['Frontend Developer', 'Website Designer'],
        loop: true,
        typeSpeed: 70,
        deleteSpeed: 50,
        delaySpeed: 2000

    });
    return (
        < >
            <div className='w-full lgl:w-1/2 flex flex-col gap-14 '>
                <div className='flex flex-col gap-5'>
                    <h4 className='uppercase text-lg font-normal'>Welcome to my World</h4>
                    <h1 className='text-4xl font-bold text-white sm:leading-0 leading-25'
                    >Hi,I 'm {' '}
                        <span className='capitalize text-designcolor'>Bapi Mandal </span>
                    </h1>
                    <h2 className='text-white font-bold text-4xl'>a <span>{text}</span>
                        <Cursor
                            cursorBlinking="false"
                            cursorStyle="|"
                            cursorColor='#ff014f'
                        />
                    </h2>
                    <p className='font-bodyfont'>I'm a frontend developer passionate about building beautiful, responsive, and user-focused web experiences. With a strong foundation in HTML, CSS, JavaScript, and modern frameworks like React, I turn complex problems into clean, efficient code. I care deeply about UI/UX, performance, and creating intuitive interfaces that not only look great but feel great to use. Whether it's a sleek landing page or a full web app, I love bringing ideas to life in the browser.</p>
                </div>

                <div className='flex flex-col xl:flex-row gap-6 xl:gap-0 justify-between'>
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