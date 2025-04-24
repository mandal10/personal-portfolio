import React from 'react'
import Title from '../layouts/Title'
import { FaAppStore, FaDesktop, FaMobile, FaGlobe } from 'react-icons/fa';
import { SiProgress, SiAntdesign } from 'react-icons/si';

import Card from './Card'

function Features() {
    return (
        <section id="features" className='w-full  py-20  border-b border-black px-16'>
            <Title title="Features" des="What I Do" />
            <div className='grid grid-cols-3 gap-10'>
                <Card
                    title="Desktop "
                    des="Apps that run on desktop computers, either locally or on the cloud, using technologies.
                         "
                    icon={<FaDesktop />}
                />
                <Card
                    title="App Development"
                    des=" Apps built for Apple devices, developed using Swift or Objective-C and typically built in Xcode.
                   "
                    icon={<FaMobile />}

                />
                <Card
                    title="Website Design"
                    des="Website design is the broader process that encompasses both UI and UX design. "
                    icon={<SiAntdesign />}

                />
                <Card
                    title="Web Development"
                    des="Web apps are accessed via a browser and don’t need to be downloaded like mobile apps.
                    "
                    icon={<FaAppStore />}

                />
                <Card
                    title="UI Design"
                    des="UI design refers to the visual elements that allow users to interact with a website, app, or system. "
                    icon={<SiProgress />}

                />
                <Card
                    title="UX Design"
                    des="UX design is concerned with the overall experience of the user when interacting with the product.  "
                    icon={<FaGlobe />}

                />

            </div>

        </section>
    )
}

export default Features