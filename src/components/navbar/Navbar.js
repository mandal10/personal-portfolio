import React, { useState } from 'react';
import { Link } from 'react-scroll';

import { logo } from "../../assets/index.js";
import { NavLinksData } from "../../constants/index.js";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    return (
        <div className='w-full lgl:px-16 sm:px-10 px-5 h-24 mx-auto sticky top-0 z-50 bg-bodycolor flex justify-between items-center font-titlefont border-b border-gray-500'>
            {/* Logo Section */}
            <div>
                <img src={logo} alt='logo' />
            </div>

            {/* Navigation Links (Desktop - Visible on medium and larger screens) */}
            <div className='hidden lg:flex'>
                <ul className='flex items-center gap-6'>
                    {NavLinksData.map(({ _id, title, link }) => (
                        <li
                            className='text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designcolor duration-300'
                            key={_id}
                        >
                            <Link
                                to={link}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                activeClass="active"
                            >
                                {title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Hamburger Icon for Mobile Devices (Visible on medium and smaller screens) */}
            <div className='lg:hidden flex items-center'>
                <button onClick={toggleMenu} className='text-gray-400 hover:text-designcolor'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6 text-white"
                    >
                        {isMenuOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu (Visible on medium and smaller screens when toggled open) */}
            <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-24 left-0 w-full bg-bodycolor`}>
                <ul className='flex flex-col items-center gap-6 py-4'>
                    {NavLinksData.map(({ _id, title, link }) => (
                        <li
                            className='text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designcolor duration-300'
                            key={_id}
                        >
                            <Link
                                to={link}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                activeClass="active"
                                onClick={() => setIsMenuOpen(false)} // Close menu after clicking link
                            >
                                {title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
