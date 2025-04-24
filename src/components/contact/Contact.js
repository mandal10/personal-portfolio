import React from 'react';
import Title from '../layouts/Title';
import ContactLeft from './ContactLeft';
import ContactRight from './ContactRight';

function Contact() {

    return (
        <section id="contacts" className='w-full py-20  px-16'>
            <div className='text-center'>
                <Title title='Contact' des='Contact With Me' />
            </div>

            <div className='w-full'>
                <div className='w-full h-auto flex justify-between'>
                    <ContactLeft />
                    <ContactRight />


                </div>
            </div>
        </section>
    );
}

export default Contact;
