import React from 'react'
import { contactImg } from "../../assets/index"
import { FaFacebook, FaTwitter } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa6'

function ContactLeft() {
    return (
        <div className='lgl:w-[35%] w-full h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-lg lgl:p-8 p-3 flex flex-col gap-8 justify-center'>
            <img src={contactImg} alt='contactImg' className='w-full h-64 object-cover rounded-lg ' />
            <div className='flex flex-col gap-4'>
                <h3 className='text-3xl font-bold text-white'>John Doe</h3>
                <p className='text-lg font-normal text-gray-400'>MERN Stack Developer</p>
                <p className='text-base tracking-wide text-gray-400'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                <p className='text-base text-gray-400 flex items-center gap-2'>Phone: <span className='text-lightcolor'>+918800752892</span></p>
                <p className='text-base text-gray-400 flex items-center gap-2'>Email: <span className='text-lightcolor'>noor@gmail.com</span></p>
            </div>
            <div className='flex flex-col gap-2'>
                <h2 className='text-base uppercase font-titlefont mb-4'>
                    Find ME IN
                </h2>
                <div className='flex gap-4 '>
                    <span className='bannerIcon'><FaFacebook /></span>
                    <span className='bannerIcon'><FaTwitter /></span>
                    <span className='bannerIcon'><FaLinkedin /></span>

                </div>
            </div>
        </div>
    )
}

export default ContactLeft