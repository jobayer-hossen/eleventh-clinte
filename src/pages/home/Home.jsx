import React from 'react';
import Fade from 'react-reveal/Fade';
import GallerySection from './GallerySection';
import Lottie from "lottie-react";
import useTitle from '../../components/hooks/useTitle';
import ShopByCategory from './shopbycategory/ShopByCategory';
import animation from '../../../public/banner/31548-robot-says-hello.json'
import Service from './extra-two-section/Service';
import Offer from './extra-two-section/Offer';


const Home = () => {
    useTitle('Home');
    return (
        <>
            <div className='w-[90%] mx-auto rounded mt-5 mb-6'>

                <div className="hero  rounded shadow-2xl min-h-screen ">

                    <div className='animation-two' >

                        <div className="flex items-center justify-center ">
                            <div className="relative">
                                <div className=" absolute rounded-full -bottom-20 left-4 lg:w-72 lg:h-72 sm:w-[10%] sm:h-[10%] bg-lime-500 filter blur-xl mix-blend-multiply opacity-75 "></div>


                                <div className="absolute rounded-full -bottom-20 -right-4 lg:w-72 lg:h-72 sm:w-[10%] sm:h-[10%] bg-pink-500 filter blur-2xl mix-blend-multiply opacity-75  "></div>

                                <div className="absolute rounded-full top-10 -right-4 lg:w-72 lg:h-72 sm:w-[10%] sm:h-[10%] bg-violet-500 filter blur-2xl  mix-blend-multiply opacity-75  animation-delay-4s"></div>

                                <div className=" absolute rounded-full top-10 -left-4 lg:w-72 lg:h-72 sm:w-[10%] sm:h-[10%] bg-amber-500 filter blur-2xl mix-blend-multiply opacity-75 "></div>

                            </div>
                        </div>


                    </div>


                    <div className="hero-content relative flex-col lg:flex-row-reverse">


                    <Fade bottom >
                        <div className="lg:w-[40%] text-center  sm:w-20 sm:ml-0 lg:ml10" data-aos="fade-left"
                            data-aos-anchor="#example-anchor"
                            data-aos-offset="500"
                            data-aos-duration="500">
                            <h1 className="text-5xl font-bold">
                                Robo
                                <span className="text-sky-500">Land</span>
                            </h1>
                            <p className="py-6 font-semibold">
                            An Immersive Journey into a High-Tech Wonderland, where humans and robots intertwine in a captivating saga of adventure, discovery, and the boundless possibilities of AI-driven existence.
                            </p>

                        </div>
                        </Fade>

                        <div className="lg:w-[40%] sm:w-20" data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine">
                            <Lottie animationData={animation} loop={true} />
                        </div>
                    </div>
                </div>


            </div>




            <GallerySection></GallerySection>
            <ShopByCategory></ShopByCategory>
            <Service></Service>
            <Offer></Offer>


        </>
    );
};

export default Home;