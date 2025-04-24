import React, { useState } from 'react'
import Title from '../layouts/Title'
import Education from './Education'
import Skills from './Skills'
import Experience from './Experience'
import Achievements from './Achievements'


function Resume() {
    const [educationData, setEducationData] = useState(true);
    const [skillData, SetSkillData] = useState(false);
    const [experienceData, setExperienceData] = useState(false);
    const [achievementData, setAchievementData] = useState(false);

    return (
        <section id="resume" className='w-full  py-20  border-b border-black  lgl:px-16 sm:px-10 px-5'>
            <div className='text-center '>
                <Title title='7+ Years of Experience' des='My Resume' />
            </div>
            <div>
                <ul className='w-full grid lgl:grid-cols-4 grid-cols-1 mdl:grid-cols-2 '>
                    <li onClick={() =>
                        setEducationData(true) &
                        SetSkillData(false) &
                        setAchievementData(false) &
                        setExperienceData(false)

                    } className={`${educationData ? "border-designcolor border rounded-lg" : "border-transparent"} resumeli`}>Education</li>
                    <li
                        onClick={() =>
                            setEducationData(false) &
                            SetSkillData(true) &
                            setAchievementData(false) &
                            setExperienceData(false)
                        }
                        className={`${skillData ? "border-designcolor border rounded-lg" : "border-transparent"} resumeli`}>Professional Skills</li>
                    <li
                        onClick={() =>
                            setEducationData(false) &
                            SetSkillData(false) &
                            setAchievementData(true) &
                            setExperienceData(false)
                        }
                        className={`${achievementData ? "border-designcolor border rounded-lg" : "border-transparent"} resumeli`}>Experience</li>
                    <li
                        onClick={() =>
                            setEducationData(false) &
                            SetSkillData(false) &
                            setAchievementData(false) &
                            setExperienceData(true)
                        }
                        className={`${experienceData ? "border-designcolor border rounded-lg" : "border-transparent"} resumeli`}>Achievements</li>

                </ul>
            </div>
            {educationData && <Education />}
            {skillData && <Skills />}
            {experienceData && <Experience />}
            {achievementData && <Achievements />}
        </section>
    )
}

export default Resume