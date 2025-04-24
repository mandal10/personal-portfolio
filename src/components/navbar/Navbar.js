import React from 'react';
import { Link } from 'react-scroll';

import { logo } from "../../assets/index.js";
import { NavLinksData } from "../../constants/index.js";

function Navbar() {
    return (
        <div className='w-full h-24 mx-auto sticky top-0 z-50 bg-bodycolor flex justify-between items-center font-titlefont border-b border-gray-500' >
            <div>
                <img src={logo} alt='logo' />
            </div>
            <div>
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
        </div>
    );
}

export default Navbar;
