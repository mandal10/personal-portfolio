import React, { useState } from 'react'
import Title from '../layouts/Title'
import { RiStarFill } from 'react-icons/ri';
import Slider from "react-slick";
import { HiArrowRight, HiArrowLeft } from 'react-icons/hi';
import { testimonialOne, quote, testimonialTwo } from '../../assets';

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div className='w-14 h-12 bg-[#0c1821] hover:bg-black duration:300 rounded-md text-2xl text-gray-400  flex justify-center items-center absolute lgl:top-0 -top-20 right-0 shadow-lg cursor-pointer z-10'

            onClick={onClick}
        ><HiArrowRight /> </div>
    );
}
function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div className='w-14 h-12 bg-[#0c1821] hover:bg-black duration:300 rounded-md text-2xl text-gray-400  flex justify-center items-center absolute lgl:top-0 -top-20 right-20 shadow-lg cursor-pointer z-10'

            onClick={onClick}
        ><HiArrowLeft /> </div>
    );
}

function Testimonial() {

    const [dotActive, setDotActive] = useState(0);
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,

        beforeChange: (prev, next) => {
            setDotActive(next);
        },

        appendDots: dots => (
            <div
                style={{

                    borderRadius: "10px",
                    padding: "10px"
                }}
            >
                <ul style={{
                    display: "flex",
                    justifyContent: "center",

                    gap: "15px",
                    marginTop: "20px"
                }}> {dots} </ul>
            </div>
        ),
        customPaging: i => (
            <div
                style={
                    i === dotActive ? {
                        height: "12px",
                        width: "12px",
                        color: "blue",
                        background: "#ff014f",
                        borderRadius: "50%",
                        cursor: "pointer",
                    } : {
                        height: "12px",
                        width: "12px",
                        color: "blue",
                        background: "gray",
                        borderRadius: "50%",
                        cursor: "pointer",
                    }
                }
            >

            </div>
        )
    };
    return (
        <section id="testimonial" className='w-full  py-20  border-b border-black  lgl:px-16 sm:px-10 px-5'>
            <div className='text-center pb-[50px] lgl:pb-0'>
                <Title title='What Clients say' des='Testimonial' />
            </div>


            <div className='max-w-6xl mx-auto '>
                <Slider {...settings}>
                    <div className='w-full'>
                        <div className='w-full lgl:h-[500px] lgl:flex lgl:flex-row flex-col justify-between'>
                            <div className='lgl:w-[35%] w-full h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-lg lgl:p-8 p-3 flex flex-col gap-8 justify-center'>
                                <img className='h-72 rounded-lg object-cover' src={testimonialTwo} alt='testimonialTwo' />

                                <div>
                                    <p className='text-xs uppercase text-designcolor tracking-wide mb-2'>Bound Trolola</p>
                                    <h3 className='text-2xl font-bold'>Jone Duone Joe</h3>
                                    <p className='tracking-wide text-gray-500 text-base'>operation officer</p>
                                </div>
                            </div>
                            <div className='lgl:w-[60%] w-full flex flex-col justify-between '>
                                <img className='w-[20%] rounded-lg object-cover ' src={quote} alt='quote' />
                                <div className='h-[70%] w-full bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-lg py-10 lgl:p-8 p-3 flex flex-col justify-center gap-8'>
                                    <div className='flex flex-col lgl:flex-row gap-3 justify-between lgl:items-center items-start border-b-2 border-gray-900 py-6'>
                                        <div>
                                            <h3 className='text-2xl font-medium tracking-wide'>Travel Mobile App Design</h3>
                                            <p className='text-base text-gray-300 mt-3'> Via UpWork - Mar 4, 2015 - Aug 30, 2021 Test</p>
                                        </div>
                                        <div className='text-yellow-300 flex gap-1'>
                                            <RiStarFill />
                                            <RiStarFill />
                                            <RiStarFill />
                                            <RiStarFill />
                                            <RiStarFill />

                                        </div>

                                    </div>

                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less </p>
                                </div>



                            </div>
                        </div>
                    </div>


                    <div className='w-full'>
                        <div className='w-full lgl:h-[500px] lgl:flex lgl:flex-row flex-col justify-between'>
                            <div className='lgl:w-[35%] w-full h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-lg lgl:p-8 p-3 flex flex-col gap-8 justify-center'>
                                <img className='h-72 rounded-lg object-cover' src={testimonialOne} alt='testimonialOne' />

                                <div>
                                    <p className='text-xs uppercase text-designcolor tracking-wide mb-2'>Bound Trolola</p>
                                    <h3 className='text-2xl font-bold'>Jone Duone Joe</h3>
                                    <p className='tracking-wide text-gray-500 text-base'>operation officer</p>
                                </div>
                            </div>
                            <div className='lgl:w-[60%] w-full flex flex-col justify-between '>
                                <img className='w-[20%] rounded-lg object-cover ' src={quote} alt='quote' />
                                <div className='h-[70%] w-full bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-lg py-10 lgl:p-8 p-3 flex flex-col justify-center gap-8'>
                                    <div className='flex flex-col lgl:flex-row gap-3 justify-between lgl:items-center items-start border-b-2 border-gray-900 py-6'>
                                        <div>
                                            <h3 className='text-2xl font-medium tracking-wide'>Travel Mobile App Design</h3>
                                            <p className='text-base text-gray-300 mt-3'> Via UpWork - Mar 4, 2015 - Aug 30, 2021 Test</p>
                                        </div>
                                        <div className='text-yellow-300 flex gap-1'>
                                            <RiStarFill />
                                            <RiStarFill />
                                            <RiStarFill />
                                            <RiStarFill />
                                            <RiStarFill />

                                        </div>

                                    </div>

                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less </p>
                                </div>



                            </div>
                        </div>
                    </div>


                </Slider>
            </div>
        </section>


    )
}

export default Testimonial