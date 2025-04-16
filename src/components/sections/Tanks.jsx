"use client";
import RedBtn from '../buttons/RedBtn'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState, useRef, useEffect } from "react";
import { RiArrowLeftLine, RiArrowRightLine } from '@remixicon/react';


const tankData = [{
    title: 'ISO Tanks',
    subtitle: 'Efficient and Secure Transport for Liquids and Chemicals',
    description: 'RASSCS maintains a robust fleet of ISO tanks—T11, T14, T20, and T22—engineered for the global movement of bulk liquids. These tanks serve both chemical and food-grade industries, offering flexibility, safety, and regulatory compliance.',
    image: '/images/tank/chemical_grade.webp',
    highlights: [
        'Versatile applications for hazardous and non-hazardous cargo',
        'Designed for food-grade and chemical-grade products',
        'Compliance with international transport standards',
    ],
    tankTypes: [
        {
            label: 'Chemical',
            image: '/images/tank/chemical_grade.webp',
        },
        {
            label: 'Food Grade',
            image: '/images/tank/food_grade.webp'
        },

    ]
},
{
    title: 'Baffle Tanks',
    subtitle: 'Stabilized Transport for Bulk Liquids with Reduced Surge Impact',
    description: 'Baffle Tanks come with internal partitions to minimize liquid movement during transit, ensuring added safety for sensitive or partially filled loads.',
    image: '/images/tank/baffle_tanks.webp',
    highlights: [
        'Surge reduction for better balance and control.',
        'Ideal for partial loads and sensitive cargo.',
        'Improves safety and efficiency in transit.',
        'Enhanced load security with reduced risk of in-transit shifting.',
    ],
    tankTypes: [
    ]
},
{
    title: 'Flexi Tank Solutions',
    subtitle: 'Scalable and Reliable Logistics for Non-Hazardous Liquids',
    description: 'RASSCS provides end-to-end Flexi Tank logistics for non-hazardous liquid cargo across industries—from edible oils to industrial chemicals.',
    image: '/images/tank/flexi.webp',
    highlights: [
        'Complete coverage: Supply, fitting, loading, shipping, and discharge.',
        'Global connectivity: In-house teams and a strong international partner network.',
        'Emergency response: Rapid issue resolution and contingency handling.',
        'Trusted across industries: Food & beverages, industrial chemicals, agriculture, pharmaceuticals, and cosmetics',
    ],
    tankTypes: [
    ]
},
{
    title: 'Swap Tanks',
    subtitle: 'High-Capacity Storage and Movement for Bulk Liquids',
    description: 'Swap Tanks offer 25–40KL capacity, outperforming standard ISO tanks in volume. Ideal for plant storage and large-scale logistics.',
    image: '/images/tank/swap_tank.webp',
    highlights: [
        'Up to 25% higher capacity than regular ISO tanks.',
        'SS 316L build with insulation, heating, and dual manholes.',
        'Perfect for on-site chemical storage and bulk transport.',
        'Ready for road, rail, and intermodal movement.',
    ],
    tankTypes: [
    ]
},
{
    title: 'T50 Tanks',
    subtitle: 'Safe and Efficient Transport for Pressurized Gases',
    description: 'Built for liquefied gases such as LPG, ammonia, and propylene, T50 tanks are pressure-resistant (up to 34.4 bar) and ideal for industrial gas transport and storage.',
    image: '/images/tank/t50.webp',
    highlights: [
        'High-pressure containment with reinforced build.',
        'Multi-gas compatibility.',
        'Robust safety valves and relief systems.',
        'Suitable for global gas logistics.',
    ],
    tankTypes: [
    ]
},
{
    title: 'T75 Tanks',
    subtitle: 'Ultra-Low Temperature Transport for Cryogenic Liquids',
    description: 'T75 tanks are built for cryogenic products like LNG, LOX, LIN, and LAR, maintaining temperatures as low as -196°C with vacuum-insulated double walls.',
    image: '/images/tank/T75i.webp',
    highlights: [
        'Designed for extreme temperature retention.',
        'Suitable for a range of cryogenic gases.',
        'Minimal boil-off and high thermal efficiency.',
        'Compliant with international cryogenic safety standards.',
    ],
    tankTypes: [
    ]
},

]

export const Tank = ({ title, subtitle, description, highlights, tankTypes, image }) => {

    const [selectedImage, setSelectedImage] = useState(image)

       
    
    return (
        <div className="w-full mb-10 py-6 md:py-12 ">
            <div className="flex h-full gap-3 flex-col">
                <h1 className='text-xl  lg:text-2xl uppercase text-[#EA1B22]'>{title}</h1>
                <p className='text-sm'>{subtitle}</p>
                <p className=' text-xs lg:text-base font-semibold w-[90%]'>{description}</p>

                <div className="w-full md:mt-10 xl:h-[80vh] md:h-[60vh] flex flex-col md:flex-row md:gap-5">
                    <div className=" w-full md:w-[50%] center h-full">
                        <img src={selectedImage} alt="Selected Tank" className="max-h-full object-contain" />
                    </div>


                    <div className=" w-full md:w-[50%] pt-10 h-full pr-0 md:pr-10">
                        <p className='font-semibold text-sm mb-2'>Highlights:</p>
                        {highlights.map((item, idx) => (
                            <div key={idx} className=" text-xs md:text-base py-2 mt-2 border-b-2  border-[#222d37ac]">
                                <p>{item}</p>
                            </div>
                        ))}

                        <div className="w-full flex gap-5 mt-10 flex-wrap">
                            {tankTypes.map((tank, idx) => {
                                const isSelected = selectedImage === tank.image
                                return (
                                    <div
                                        key={idx}
                                        onClick={() => setSelectedImage(tank.image)}
                                        className={` w-[45%] md:w-[30%] lg:w-[20%] rounded-xl cursor-pointer transition-all duration-300 px-3 py-2 flex flex-col gap-2
                                        ${isSelected ? 'border shadow-lg border-[#959595]' : ''}`}
                                    >
                                        <p className=' text-xs lg:text-sm font-semibold text-center'>{tank.label}</p>
                                        <div className="w-full center">
                                            <img className='  w-full md:w-[70%]' src={tank.image} alt={tank.label} />
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};


const Tanks = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const [totalSlides, setTotalSlides] = useState(tankData.length);
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
        <div className=" relative w-full  pad my-20">
            <div className="w-full ">
                <p className='text-xl md:text-2xl lg:text-3xl font-semibold'>Your Requirement, Our Expertise</p>
                <p className='text-xs  lg:text-base leading-tight'>Built for Efficiency, Safety & Sustainability: Explore Our Specialized Fleet</p>
            </div>
            <Swiper
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
            </Swiper>
            <div className="absolute bottom-0 md:bottom-10  flex w-full  right-0 z-[90] items-center justify-end ">
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

            </div>
        </div>
    );
};

export default Tanks;
