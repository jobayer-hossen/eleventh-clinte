import React from 'react';
import Lottie from "lottie-react";
import Fade from 'react-reveal/Fade';
import animation from '../../../../public/service/79793-guy-talking-to-robot-ai-help.json'

const Service = () => {
    return (
        <>
            <div className='w-[90%] mx-auto rounded mt-5'>

                <div className="hero  rounded  min-h-screen bg-gradient-to-r from-violet-200 to-pink-200 ">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                    <Fade right>
                        <div className="lg:w-[40%] sm:w-20">
                            <Lottie animationData={animation} loop={true} />
                        </div>
                        </Fade>

                    <Fade left>
                        <div className="lg:w-[40%] sm:w-20 sm:ml-0 lg:ml10" data-aos="fade-left">
                            <h1 className="text-5xl font-bold">
                                Why our <br /> Service is Best  !!

                            </h1>
                            <p className="py-6 font-semibold">
                                Unmatched Excellence: Discover why our service stands out from the competition. With a relentless commitment to customer satisfaction, we deliver unparalleled quality, efficiency, and innovation. Our expert team of professionals combines years of industry experience with cutting-edge technology to provide tailored solutions that exceed expectations. We prioritize clear communication, ensuring your needs are understood and met with precision. From seamless project management to timely delivery, we maintain a steadfast focus on excellence. Our attention to detail, rigorous quality control, and unwavering dedication make us the preferred choice for discerning clients seeking the very best. Experience the difference today.
                            </p>

                        </div>
                        </Fade>
                    </div>
                </div>


            </div>
        </>
    );
};

export default Service;