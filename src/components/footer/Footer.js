import React from 'react'
import { logo } from '../../assets'
import { FaFacebook, FaTwitter } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa6'

function Footer() {
    return (
        <div className='grid grid-cols-4 gap-8 w-full py-20 h-96  border-black border-b px-16'>
            <div className='w-full h-full flex flex-col gap-8'>
                <img className='w-32' src={logo} alt='logo' />
                <div className='flex gap-4 '>
                    <span className='bannerIcon'><FaFacebook /></span>
                    <span className='bannerIcon'><FaTwitter /></span>
                    <span className='bannerIcon'><FaLinkedin /></span>

                </div>
            </div>
            <div className='w-full h-full '>
                <h3 className='text-xl uppercase tracking-wider text-designcolor'>Quick Link</h3>
                <ul className='flex flex-col gap-4 font-titlefont font-medium py-6 overflow-hidden'>
                    <li>
                        <span className='w-full text-lg hover:text-designcolor duration-300 cursor-pointer relative group'>
                            About
                            <span className='absolute h-[1px] w-full inline-flex bg-designcolor -bottom-1 -left-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>
                        </span>
                    </li>
                    <li>
                        <span className='w-full text-lg hover:text-designcolor duration-300 cursor-pointer relative group'>
                            Portfolio
                            <span className='absolute h-[1px] w-full inline-flex bg-designcolor -bottom-1 -left-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>
                        </span>
                    </li>
                    <li>
                        <span className='w-full text-lg hover:text-designcolor duration-300 cursor-pointer relative group'>
                            Services
                            <span className='absolute h-[1px] w-full inline-flex bg-designcolor -bottom-1 -left-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>
                        </span>
                    </li>
                    <li>
                        <span className='w-full text-lg hover:text-designcolor duration-300 cursor-pointer relative group'>
                            Blog
                            <span className='absolute h-[1px] w-full inline-flex bg-designcolor -bottom-1 -left-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>
                        </span>
                    </li>
                    <li>
                        <span className='w-full text-lg hover:text-designcolor duration-300 cursor-pointer relative group'>
                            Contact
                            <span className='absolute h-[1px] w-full inline-flex bg-designcolor -bottom-1 -left-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>
                        </span>
                    </li>


                </ul>
            </div>
            <div className='w-full h-full '>
                <h3 className='text-xl uppercase tracking-wider text-designcolor'>Resources</h3>
                <ul className='flex flex-col gap-4 font-titlefont font-medium py-6 overflow-hidden'>
                    <li>
                        <span className='w-full text-lg hover:text-designcolor duration-300 cursor-pointer relative group'>
                            Authentication
                            <span className='absolute h-[1px] w-full inline-flex bg-designcolor -bottom-1 -left-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>
                        </span>
                    </li>
                    <li>
                        <span className='w-full text-lg hover:text-designcolor duration-300 cursor-pointer relative group'>
                            System Status
                            <span className='absolute h-[1px] w-full inline-flex bg-designcolor -bottom-1 -left-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>
                        </span>
                    </li>
                    <li>
                        <span className='w-full text-lg hover:text-designcolor duration-300 cursor-pointer relative group'>
                            Terms Of Services
                            <span className='absolute h-[1px] w-full inline-flex bg-designcolor -bottom-1 -left-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>
                        </span>
                    </li>
                    <li>
                        <span className='w-full text-lg hover:text-designcolor duration-300 cursor-pointer relative group'>
                            Pricing
                            <span className='absolute h-[1px] w-full inline-flex bg-designcolor -bottom-1 -left-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>
                        </span>
                    </li>
                    <li>
                        <span className='w-full text-lg hover:text-designcolor duration-300 cursor-pointer relative group'>
                            Over Right
                            <span className='absolute h-[1px] w-full inline-flex bg-designcolor -bottom-1 -left-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>
                        </span>
                    </li>


                </ul>
            </div>
            <div className='w-full h-full '>
                <h3 className='text-xl uppercase tracking-wider text-designcolor'>Developers</h3>
                <ul className='flex flex-col gap-4 font-titlefont font-medium py-6 overflow-hidden'>
                    <li>
                        <span className='w-full text-lg hover:text-designcolor duration-300 cursor-pointer relative group'>
                            Documentation
                            <span className='absolute h-[1px] w-full inline-flex bg-designcolor -bottom-1 -left-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>
                        </span>
                    </li>
                    <li>
                        <span className='w-full text-lg hover:text-designcolor duration-300 cursor-pointer relative group'>
                            Authentication
                            <span className='absolute h-[1px] w-full inline-flex bg-designcolor -bottom-1 -left-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>
                        </span>
                    </li>
                    <li>
                        <span className='w-full text-lg hover:text-designcolor duration-300 cursor-pointer relative group'>
                            API Reference
                            <span className='absolute h-[1px] w-full inline-flex bg-designcolor -bottom-1 -left-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>
                        </span>
                    </li>
                    <li>
                        <span className='w-full text-lg hover:text-designcolor duration-300 cursor-pointer relative group'>
                            Support
                            <span className='absolute h-[1px] w-full inline-flex bg-designcolor -bottom-1 -left-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>
                        </span>
                    </li>
                    <li>
                        <span className='w-full text-lg hover:text-designcolor duration-300 cursor-pointer relative group'>
                            Open Source
                            <span className='absolute h-[1px] w-full inline-flex bg-designcolor -bottom-1 -left-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>
                        </span>
                    </li>


                </ul>
            </div>


        </div>
    )
}

export default Footer