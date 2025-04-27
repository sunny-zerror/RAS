"use client";
import RedBtn from '../buttons/RedBtn'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState, useRef, useEffect } from "react";
import { RiArrowLeftLine, RiArrowRightLine } from '@remixicon/react';

const HowRas = () => {


    const data = [
        {
            id: 1,
            title: "Integrated Logistics",
            img: "/images/How_RASSCS_Makes_It_Happen_slide_1_wider.webp",
            para: "With deep expertise in chemical, food-grade, cryogenic, and specialty logistics, we tailor solutions that comply with the highest industry standards—ensuring safety, traceability, and uninterrupted flow.",
            btn: "Customize Your Logistics Plan"
        }, {
            id: 2,
            title: "Global Agency Network",
            img: "/images/How_RASSCS_Makes_It_Happen_slide_2_wider.webp",
            para: "Our extensive international network, in-house operations teams, and fleet diversity give us control at every touchpoint—from procurement to last-mile delivery.",
            btn: "Power Your Reach"
        }, {
            id: 3,
            title: "Sustainability Driven Operations",
            img: "/images/How_RASSCS_Makes_It_Happen_slide_3_wider.webp",
            para: "With deep expertise in chemical, food-grade, cryogenic, and specialty logistics, we tailor solutions that comply with the highest industry standards—ensuring safety, traceability, and uninterrupted flow.",
            btn: "Customize Your Logistics Plan"
        }
    ]




    const [currentSlide, setCurrentSlide] = useState(0);
    const [totalSlides, setTotalSlides] = useState(data.length);
    const [swiperInstance, setSwiperInstance] = useState(null);
    const prevRef = useRef(null);
    const nextRef = useRef(null);


    useEffect(() => {
        if (swiperInstance && prevRef.current && nextRef.current) {
            swiperInstance.params.navigation.prevEl = prevRef.current;
            swiperInstance.params.navigation.nextEl = nextRef.current;
            swiperInstance.navigation.destroy(); // destroy existing navigation
            swiperInstance.navigation.init(); // re-init navigation
            swiperInstance.navigation.update(); // update navigation
        }
    }, [swiperInstance, prevRef, nextRef]);

    return (
        <div id='our-approach' className="story_swiper_classname_container  relative  pad mt-0 lg:mt-20 overflow-hidden ">
            <h1 className='text-xl md:text-2xl lg:text-4xl font-semibold mb-8 '>How RAS Makes It Happen</h1>
            <div className="absolute  max-[640px]:-bottom-10 pl-10 md:pl-0 md:top-0   flex w-full  right-0 z-[90] items-center md:justify-end ">
                <div className="flex  pr-5 md:pr-14 gap-2 ">
                    <button
                        ref={prevRef}
                        className={`p-2  shrink-0 text-[#EA1B22] border-[#EA1B22] rounded-full border z-10 transition-opacity duration-300 ${currentSlide === 0 ? 'border-gray-800 text-black opacity-40 cursor-not-allowed' : ''
                            }`}
                    >
                        <RiArrowLeftLine size={16} />
                    </button>
                    <button
                        ref={nextRef}
                        className={`p-2  shrink-0 text-[#EA1B22] border-[#EA1B22] rounded-full border z-10 transition-opacity duration-300 ${currentSlide === totalSlides - 1 ? 'border-gray-800 text-black opacity-40 cursor-not-allowed' : ''
                            }`}
                    >
                        <RiArrowRightLine size={16} />
                    </button>


                </div>

            </div>
            <Swiper
                modules={[Navigation, A11y]}
                spaceBetween={10}
                slidesPerView={1}
                speed={600}
                onSwiper={setSwiperInstance}
                onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
                className="story_swiper_classname_swiper"
            >
                {
                    data.map((item, index) => (
                        <SwiperSlide key={item.id}>
                            <div className="w-full md:h-[70vh] flex flex-col md:flex-row items-center justify-between">
                                <div className=" w-full md:w-[50%]  overflow-hidden rounded-2xl h-full">
                                    <img className=' w-full h-full object-cover' src={item.img} alt="" />
                                </div>
                                <div className=" w-full md:w-[45%] h-full center pt-5 md:pt-0">
                                    <div className="flex flex-col  h-full md:h-[50%] items-start gap-5   w-full ">
                                        <div className="flex w-full  items-center  gap-1 md:gap-3 ">
                                            <div className="   md:size-5 center">
                                                <img className='w-[50%]' src="/icons/Ellipse 30.png" alt="" />
                                            </div>
                                            <p className='text-2xl lg:text-4xl xl:text-4xl font-semibold'>{item.title}</p>
                                        </div>
                                        <div className=" pl-5 md:pl-9">
                                            <p className=' text-sm lg:text-base  w-full md:w-[80%]'>{item.para}</p>

                                        </div>
                                        <div className="pl-5 md:pl-9">
                                            <RedBtn text={item.btn} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }

            </Swiper>


        </div>
    );
};

export default HowRas;
