"use client";
import RedBtn from '../buttons/RedBtn'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState, useRef, useEffect } from "react";
import { RiArrowLeftLine, RiArrowRightLine } from '@remixicon/react';
import { motion, AnimatePresence } from 'framer-motion';
import { tankData } from '../../utils/Data/TanksData'


export const Tank = ({ title, subtitle, description, highlights, changeHighlight, tankTypes, image }) => {

    const [selectedImage, setSelectedImage] = useState(image)

    useEffect(() => {
        setSelectedImage(image);
    }, [image]);

    return (
        <div className="w-full  pb-6  ">
            <div className="flex h-full gap-3 flex-col">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedImage}
                        initial={{ y: "1vh", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: "-1vh", opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        {/* <h1 className='text-xl  lg:text-2xl uppercase text-[#EA1B22]'>{title}</h1> */}
                        <p className=' text-sm md:text-sm xl:text-lg  font-semibold leading-tight'>{subtitle}</p>
                        <p className='  mt-2 md:mt-0 mb-5 md:mb-0 text-sm opacity-80  leading-tight md:text-sm xl:text-base  '>{description}</p>

                        <div className="w-full h-fit     flex flex-col md:flex-row ">
                            <div className=" w-full py-5 md:py-0   md:w-[50%] center h-[30vh]  md:h-[50vh]">
                                <motion.img
                                    key={selectedImage}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                                    src={selectedImage}
                                    alt="Selected Tank"
                                    className="h-full w-[80%] object-contain"
                                />
                            </div>


                            <div className=" w-full md:w-[50%] h-full pr-0 md:pr-10">
                                <div className="w-full flex gap-5 my-5 flex-wrap">
                                    {tankTypes.map((tank, idx) => {
                                        const isSelected = selectedImage === tank.image
                                        return (
                                            <div
                                                key={idx}
                                                onClick={() => setSelectedImage(tank.image)}
                                                className={` w-[30%] py-2  xl:w-[20%] rounded-xl cursor-pointer transition-all duration-300   flex flex-col gap-2
                                        ${isSelected ? 'border shadow-lg border-[#c4c4c4]' : ''}`}
                                            >
                                                <p className=' text-sm lg:text-sm font-semibold text-center'>{tank.label}</p>
                                                <div className="w-full relative h-10 center">
                                                    <img
                                                        className={`absolute w-[30%] transition-opacity duration-300 ${isSelected ? 'opacity-0' : 'opacity-100'
                                                            }`}
                                                        src={tank.display1img}
                                                        alt={tank.label}
                                                    />
                                                    <img
                                                        className={`absolute w-[30%] transition-opacity duration-300 ${isSelected ? 'opacity-100' : 'opacity-0'
                                                            }`}
                                                        src={tank.display2img}
                                                        alt={tank.label}
                                                    />
                                                </div>

                                            </div>
                                        )
                                    })}
                                </div>
                                <p className='font-semibold text-sm mb-2'>Highlights:</p>
                                <div className="w-full  ">

                                    {(selectedImage === '/images/tank/food_grade.webp' ? changeHighlight : highlights).map((item, idx) => (
                                        <div key={idx} className=" text-sm xl:text-base py-2 mt-2 border-b border-[#222d374d]">
                                            <p>{item}</p>
                                        </div>
                                    ))}
                                </div>




                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};


const Tanks = ( { selectedTank, setSelectedTank }) => {



    // const [currentSlide, setCurrentSlide] = useState(0);

    // const [totalSlides, setTotalSlides] = useState(tankData.length);
    // const [swiperInstance, setSwiperInstance] = useState(null);
    // const prevRef = useRef(null);
    // const nextRef = useRef(null);


    // useEffect(() => {
    //     if (swiperInstance && prevRef.current && nextRef.current) {
    //         swiperInstance.params.navigation.prevEl = prevRef.current;
    //         swiperInstance.params.navigation.nextEl = nextRef.current;
    //         swiperInstance.navigation.destroy(); // destroy existing navigation
    //         swiperInstance.navigation.init(); // re-init navigation
    //         swiperInstance.navigation.update(); // update navigation
    //     }
    // }, [swiperInstance, prevRef, nextRef]);


    return (
        <div id='our-fleet' className=" relative w-full  pad   lg:py-20 overflow-hidden">
            <div className="w-full ">
                <h1 className='text-xl md:text-2xl lg:text-4xl font-semibold'>Your Requirement, Our Expertise</h1>
                <p className='text-sm  lg:text-xl leading-tight'>Built for Efficiency, Safety & Sustainability: Explore Our Specialized Fleet</p>
                <div className="w-full flex max-[640px]:overflow-x-scroll max-[640px]:scroller pb-2 gap-2 md:gap-5 items-center my-5">
                    {tankData.map((tank, idx) => (
                        <button
                            key={idx}
                            onClick={() => setSelectedTank(tank)}
                            className={`px-4 shrink-0  text-xs lg:text-sm font-semibold py-2 rounded-full transition-all duration-200
                                ${selectedTank.title === tank.title
                                    ? 'bg-[#EA1B22] text-white'
                                    : 'border border-gray-700 hover:opacity-80  hover:bg-gray-100 text-black opacity-50'}`}
                        >
                            {tank.title}
                        </button>
                    ))}
                </div>

            </div>

            <Tank
                title={selectedTank.title}
                subtitle={selectedTank.subtitle}
                description={selectedTank.description}
                highlights={selectedTank.highlights}
                changeHighlight={selectedTank.changeHighlight}
                tankTypes={selectedTank.tankTypes}
                image={selectedTank.image}
            />

            {/* <Swiper
                modules={[Navigation, A11y]}
                spaceBetween={10}
                slidesPerView={1}
                speed={1000}
                onSwiper={setSwiperInstance}
                onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
                className="story_swiper_classname_swiper"
            >
                {
                    tankData.map((tank, idx) => (
                        <SwiperSlide key={idx}>
                            <Tank key={idx} {...tank} />
                        </SwiperSlide>
                    ))
                }
            </Swiper> */}
            {/* <div className="absolute bottom-0 md:bottom-24    flex w-full  right-0 z-[90] items-center justify-end ">
                <div className="flex pr-5 md:pr-14   gap-2 md:gap-4 ">
                    <button
                        ref={prevRef}
                        className={`p-2 scale-75 md:scale-100 shrink-0 text-[#EA1B22] border-[#EA1B22] rounded-full border z-10 transition-opacity duration-300 ${currentSlide === 0 ? 'opacity-50 cursor-not-allowed' : ''
                            }`}
                    >
                        <RiArrowLeftLine size={16} />
                    </button>
                    <button
                        ref={nextRef}
                        className={`p-2 scale-75 md:scale-100 shrink-0 text-[#EA1B22] border-[#EA1B22] rounded-full border z-10 transition-opacity duration-300 ${currentSlide === totalSlides - 1 ? 'opacity-50 cursor-not-allowed' : ''
                            }`}
                    >
                        <RiArrowRightLine size={16} />
                    </button>


                </div>

            </div> */}
        </div>
    );
};

export default Tanks;
