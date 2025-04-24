import React from 'react'

import { motion } from 'framer-motion'


function Skills() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: .5 } }} className='flex w-full gap-20'>
            <div className='w-1/2'>
                <div className='py-12 font-titlefont'>
                    <p className='text-sm text-designcolor tracking-[4px]'>Features</p>
                    <h2 className='text-4xl font-bold mt-3'>Design Skill</h2>
                </div>
                <div className='mt-8 w-full flex flex-col gap-6'>
                    <div className='overflow-x-hidden'>
                        <p className='text-sm uppercase font-medium'>Web Design</p>
                        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                            <motion.span
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: .5, delay: .5 }}

                                className='h-full w-full bg-gradient-to-r from-blue-500 via-pink-500 to-red-500 rounded-md relative '>
                                <span className='-top-7 right-0 absolute'>100%</span>
                            </motion.span>
                        </span>
                    </div>

                    <div className='overflow-x-hidden'>
                        <p className='text-sm uppercase font-medium'>UI/UX Design</p>
                        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                            <motion.span
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: .5, delay: .5 }}
                                className='h-full w-[90%] bg-gradient-to-r from-blue-500 via-pink-500 to-red-500 rounded-md relative '>
                                <span className='-top-7 right-0 absolute'>90%</span>
                            </motion.span>
                        </span>
                    </div>

                    <div className='overflow-x-hidden'>
                        <p className='text-sm uppercase font-medium'>Graphic Design</p>
                        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                            <motion.span
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: .5, delay: .5 }}

                                className='h-full w-[60%] bg-gradient-to-r from-blue-500 via-pink-500 to-red-500 rounded-md relative '>
                                <span className='-top-7 right-0 absolute'>60%</span>
                            </motion.span>
                        </span>
                    </div>

                    <div className='overflow-x-hidden'>
                        <p className='text-sm uppercase font-medium'>Branding</p>
                        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                            <motion.span
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: .5, delay: .5 }} className='h-full w-[70%] bg-gradient-to-r from-blue-500 via-pink-500 to-red-500 rounded-md relative '>
                                <span className='-top-7 right-0 absolute'>70%</span>
                            </motion.span>
                        </span>
                    </div>

                    <div className='overflow-x-hidden'>
                        <p className='text-sm uppercase font-medium'>Illustration</p>
                        <motion.span
                            initial={{ x: "-100%", opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: .5, delay: .5 }} className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                            <span className='h-full w-[95%] bg-gradient-to-r from-blue-500 via-pink-500 to-red-500 rounded-md relative '>
                                <span className='-top-7 right-0 absolute'>95%</span>
                            </span>
                        </motion.span>
                    </div>
                </div>
            </div>

            <div className='w-1/2'>
                <div className='py-12 font-titlefont'>
                    <p className='text-sm text-designcolor tracking-[4px]'>Features</p>
                    <h2 className='text-4xl font-bold mt-3'>Development Skill</h2>
                </div>
                <div className='mt-8 w-full flex flex-col gap-6'>
                    <div className='overflow-x-hidden'>
                        <p className='text-sm uppercase font-medium'>Frontend Development</p>
                        <motion.span
                            initial={{ x: "-100%", opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: .5, delay: .5 }} className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                            <span className='h-full w-full bg-gradient-to-r from-blue-500 via-pink-500 to-red-500 rounded-md relative '>
                                <span className='-top-7 right-0 absolute'>100%</span>
                            </span>
                        </motion.span>
                    </div>

                    <div className='overflow-x-hidden'>
                        <p className='text-sm uppercase font-medium'>Backend Development</p>
                        <motion.span
                            initial={{ x: "-100%", opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: .5, delay: .5 }} className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                            <span className='h-full w-[95%] bg-gradient-to-r from-blue-500 via-pink-500 to-red-500 rounded-md relative '>
                                <span className='-top-7 right-0 absolute'>95%</span>
                            </span>
                        </motion.span>
                    </div>

                    <div className='overflow-x-hidden'>
                        <p className='text-sm uppercase font-medium'>Database Management</p>
                        <motion.span
                            initial={{ x: "-100%", opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: .5, delay: .5 }} className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                            <span className='h-full w-[80%] bg-gradient-to-r from-blue-500 via-pink-500 to-red-500 rounded-md relative '>
                                <span className='-top-7 right-0 absolute'>80%</span>
                            </span>
                        </motion.span>
                    </div>

                    <div className='overflow-x-hidden'>
                        <p className='text-sm uppercase font-medium'>API Development</p>
                        <motion.span
                            initial={{ x: "-100%", opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: .5, delay: .5 }} className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                            <span className='h-full w-[75%] bg-gradient-to-r from-blue-500 via-pink-500 to-red-500 rounded-md relative '>
                                <span className='-top-7 right-0 absolute'>75%</span>
                            </span>
                        </motion.span>
                    </div>

                    <div className='overflow-x-hidden'>
                        <p className='text-sm uppercase font-medium'>Version Control (Git)</p>
                        <motion.span
                            initial={{ x: "-100%", opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: .5, delay: .5 }} className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                            <span className='h-full w-[90%] bg-gradient-to-r from-blue-500 via-pink-500 to-red-500 rounded-md relative '>
                                <span className='-top-7 right-0 absolute'>90%</span>
                            </span>
                        </motion.span>
                    </div>
                </div>
            </div>

        </motion.div>
    )
}

export default Skills