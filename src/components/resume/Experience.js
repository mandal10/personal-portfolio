import React from 'react'
import ResumeCard from './ResumeCard'
import { motion } from 'framer-motion'


function Experience() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: .5 } }} className='grid lg:grid-cols-2 grid-cols-1 w-full gap-20'>
            <div className=''>
                <div className='py-12 font-titlefont'>
                    <p className='text-sm text-designcolor tracking-[4px]'>1998 - 2010</p>
                    <h2 className='text-4xl font-bold mt-3'>Company Experience</h2>
                </div>
                <div className='mt-8  lg:h-[1000px] border-l-[6px] border-black border-opacity-30 flex flex-col gap-10'>
                    <ResumeCard
                        title="Bachelor's Degree"
                        subtitle="University of DVI (2006 - 2010)"
                        result="3.90/4"
                        des="Bachelor of Science in Computer Science. During my time at the University of DVI, I gained a deep understanding of the core principles of computer science, including programming, algorithms, data structures, and software engineering."
                    />

                    <ResumeCard
                        title="High School"
                        subtitle="XYZ Senior Secondary School (2004 - 2006)"
                        result="88%"
                        des="Class 12th - Commerce Stream. In my senior years of high school, I specialized in the Commerce stream, where I focused on subjects such as Economics, Business Studies, Accountancy, and Mathematics. "
                    />
                    <ResumeCard
                        title="High School"
                        subtitle="ABC High School (2002 - 2004)"
                        result="85%"
                        des="Class 10th - Science Stream. During my time at ABC High School, I pursued a Science stream that included subjects like Physics, Chemistry, Biology, and Mathematics."
                    />

                </div>
            </div>
            <div className=''>
                <div className='py-12 font-titlefont'>
                    <p className='text-sm text-designcolor tracking-[4px]'> 2010 - 2022</p>
                    <h2 className='text-4xl font-bold mt-3'>Job Experience</h2>
                </div>
                <div className='mt-8  lg:h-[1000px] border-l-[6px] border-black border-opacity-30 flex flex-col gap-10'>
                    <ResumeCard
                        title="Master's Degree"
                        subtitle="Global Institute of Technology (2010 - 2012)"
                        result="4.00/4"
                        des="Master of Science in Artificial Intelligence. My graduate studies at the Global Institute of Technology were centered around advanced topics in artificial intelligence,."
                    />
                    <ResumeCard
                        title="Certification"
                        subtitle="Coding Academy (2016 - 2018)"
                        result="4.00/4"
                        des="Full Stack Web Development Certificate. This intensive program at Coding Academy covered both front-end and back-end technologies, such as HTML, CSS, JavaScript, Node.js, and databases like MongoDB."
                    />
                    <ResumeCard
                        title="Diploma"
                        subtitle="Creative Arts Institute (2018 - 2022)"
                        result="3.95/4"
                        des="Diploma in Graphic Design. I pursued my passion for design at Creative Arts Institute, where I learned the fundamentals of visual communication, typography, branding, and digital design tools like Adobe Illustrator, Photoshop, and InDesign. "
                    />

                </div>
            </div>
        </motion.div>
    )
}

export default Experience