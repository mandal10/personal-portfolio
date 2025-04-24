import React, { useState } from 'react'


function ContactRight() {
    // State to store form values
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: ''
    });

    // State to store error messages
    const [errors, setErrors] = useState({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: ''
    });

    // State to store the success message
    const [successMessage, setSuccessMessage] = useState('');

    // Regex for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Regex for phone number validation (valid formats: 123-456-7890, (123) 456-7890, etc.)
    const phoneRegex = /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;

    // Handle form input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Form submission handler
    const handleSubmit = (e) => {
        e.preventDefault();

        let validationErrors = {};

        // Check if any field is empty and validate email
        if (!formData.name) {
            validationErrors.name = 'Name is required.';
        }
        if (!formData.phone) {
            validationErrors.phone = 'Phone number is required.';
        } else if (!phoneRegex.test(formData.phone)) {
            validationErrors.phone = 'Please enter a valid phone number.';
        }
        if (!formData.email) {
            validationErrors.email = 'Email is required.';
        } else if (!emailRegex.test(formData.email)) {
            validationErrors.email = 'Please enter a valid email address.';
        }
        if (!formData.subject) {
            validationErrors.subject = 'Subject is required.';
        }
        if (!formData.message) {
            validationErrors.message = 'Message is required.';
        }

        // If there are validation errors, update the error state and don't submit the form
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setSuccessMessage(''); // Clear success message if there are validation errors
        } else {
            setErrors({}); // Clear any existing errors

            // Log form data (you can replace this with actual form submission logic)
            console.log('Form submitted:', formData);

            // Custom success message with the user's name
            setSuccessMessage(`Thank you, ${formData.name}! Your message has been sent successfully.`);

            // Clear the form fields
            setFormData({
                name: '',
                phone: '',
                email: '',
                subject: '',
                message: ''
            });

            // Clear the success message after 3 seconds
            setTimeout(() => {
                setSuccessMessage('');
            }, 3000);
        }
    };

    return (
        <div className='w-[60%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-lg p-8 flex flex-col gap-8 justify-center'>
            <form className='w-full flex flex-col gap-6 py-2' onSubmit={handleSubmit}>
                <div className='w-full flex gap-10'>
                    <div className='w-1/2 flex flex-col gap-4'>
                        <p className='text-sm text-gray-400 uppercase tracking-wide'>YOUR NAME</p>
                        <input
                            type='text'
                            name='name'
                            value={formData.name}
                            onChange={handleInputChange}
                            className='contactInput'
                        />
                        {errors.name && <p className='text-red-500 text-sm'>{errors.name}</p>}
                    </div>
                    <div className='w-1/2 flex flex-col gap-4'>
                        <p className='text-sm text-gray-400 uppercase tracking-wide'>Phone Number</p>
                        <input
                            type='text'
                            name='phone'
                            value={formData.phone}
                            onChange={handleInputChange}
                            className='contactInput'
                        />
                        {errors.phone && <p className='text-red-500 text-sm'>{errors.phone}</p>}
                    </div>
                </div>

                <div className='w-full'>
                    <div className='flex flex-col gap-4'>
                        <p className='text-sm text-gray-400 uppercase tracking-wide'>Email</p>
                        <input
                            type='email'
                            name='email'
                            value={formData.email}
                            onChange={handleInputChange}
                            className='contactInput'
                        />
                        {errors.email && <p className='text-red-500 text-sm'>{errors.email}</p>}
                    </div>
                </div>

                <div className='w-full'>
                    <div className='flex flex-col gap-4'>
                        <p className='text-sm text-gray-400 uppercase tracking-wide'>Subject</p>
                        <input
                            type='text'
                            name='subject'
                            value={formData.subject}
                            onChange={handleInputChange}
                            className='contactInput'
                        />
                        {errors.subject && <p className='text-red-500 text-sm'>{errors.subject}</p>}
                    </div>
                </div>

                <div className='w-full'>
                    <div className='flex flex-col gap-4'>
                        <p className='text-sm text-gray-400 uppercase tracking-wide'>Message</p>
                        <textarea
                            name='message'
                            value={formData.message}
                            onChange={handleInputChange}
                            className='contactTextarea'
                            cols="30"
                            rows="10"
                        />
                        {errors.message && <p className='text-red-500 text-sm'>{errors.message}</p>}
                    </div>
                </div>

                <div>
                    <button
                        type='submit'
                        className='w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 border hover:border-designcolor border-transparent'
                    >
                        Send Message
                    </button>
                </div>
            </form>

            {/* Success Message */}
            {successMessage && (
                <div className="mt-4 p-4 bg-green-500 text-white rounded-lg text-center">
                    {successMessage}
                </div>
            )}
        </div>
    )
}

export default ContactRight