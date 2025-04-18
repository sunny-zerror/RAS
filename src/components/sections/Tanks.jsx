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
    description: 'RAS maintains a robust fleet of ISO tanks—T11, T14, T20, and T22—engineered for the global movement of bulk liquids. These tanks serve both chemical and food-grade industries, offering flexibility, safety, and regulatory compliance.',
    image: '/images/tank/chemical_grade.webp',
    highlights: [
        'Carriage of hazardous and non-hazardous products.',
        'Capacity ranging from 24KL to 26KL',
        'Specialized chemline coated tanks for dedicated products.',
        'T20 & T22: Top Load Top Discharge tanks for highly hazardous products with higher saftey parameters',
    ],
    changeHighlight: [
        'Capacity ranging from 24KL to 26KL',
        'Dedicated Food grade tanks meets hygiene, precision and compliance to meet the requirements of food grade products.'
    ],
    tankTypes: [
        {
            label: 'Chemical',
            display1img: "/icons/iso_tank_chemical_grey.png",
            display2img: "/icons/iso_tank_chemical_red.png",
            image: '/images/tank/chemical_grade.webp',
        },
        {
            label: 'Food Grade',
            display1img: "/icons/iso_tank_food_grade_grey.png",
            display2img: "/icons/iso_tank_food_grade_red.png",
            image: '/images/tank/food_grade.webp'
        },

    ]
},
{
    title: 'Baffle Tanks',
    subtitle: 'Stabilized Transport for Bulk Liquids with Reduced Surge Impact',
    description: 'Baffle Tanks come with internal partitions to control liquid movement during transit, ensuring added safety for sensitive or partially filled loads.',
    image: '/images/tank/baffle_tanks.webp',
    highlights: [
        'Improved safety- Less sloshing, reduced risk of accidents during transporting.',
        'Ideal for partial loads and sensitive cargo.',
        'Improves balance, provides stability of vehicle or tank during sudden shift in liquid weight.',
        'Ensures better handling by making loading-unloading process more safer.',
    ],
    tankTypes: [
    ]
},
{
    title: 'Flexi Tank Solutions',
    subtitle: 'Scalable and Reliable Logistics for Non-Hazardous Liquids',
    description: 'RAS provides end-to-end Flexi Tank logistics for non-hazardous and foodgrade liquid products.',
    image: '/images/tank/flexi.webp',
    highlights: [
        'Complete coverage: Supply, fitting, loading, shipping, discharge and disposal assistance.',
        'Capacity Range form 16,000 L to 24,000 L.',
        'Emergency response: Rapid issue resolution and contingency handling.',
        'Types-Top Loading Top Discharge, Bottom Loading Bottom Discharge and Top Loading and Bottom Discharge.',
    ],
    tankTypes: [
    ]
},
{
    title: 'Swap Tanks',
    subtitle: 'High-Capacity Storage and Movement for Bulk Liquids',
    description: 'Swap tanks ranges from 28,000 L to 40,000 L capacity with similar features of regular ISO tank but with shell extended out of frame on both ends.',
    image: '/images/tank/swap_tank.webp',
    highlights: [
        'Up to 25% higher capacity than regular ISO tanks.',
        'Cost effective for transportation and storage with higher pay load and lesser tare weight.',
        'Ready for road, rail, and intermodal movement.',
    ],
    tankTypes: [
    ]
},
{
    title: 'T50 Tanks',
    subtitle: 'Safe and Efficient Transport for Pressurized Gases',
    description: 'Built for non-refrigerated liquefied gases such as LPG, ammonia, and propylene. Ideal for industrial gas transport and storage.',
    image: '/images/tank/t50.webp',
    highlights: [
        'High pressure vessel with robust construction with product details on date plate.',
        'Pressure ratings up to 34.4 bar.',
        'All calves adn fitting are mounted in a protective cabinate.',
    ],
    tankTypes: [
    ]
},
{
    title: 'T75 Tanks',
    subtitle: 'Ultra-Low Temperature Transport for Cryogenic Liquids',
    description: 'T75 tanks are built for cryogenic (Refrigerated liquified gases) products like LNG, LOX, LIN, and LAR, maintaining temperatures as low as -196°C with vacuum-insulated double walls.',
    image: '/images/tank/T75i.webp',
    highlights: [
        'Designed for extreme temperature retention.',
        'Frame sizes-20ft and 40ft to suit customer requirement.',
        'Minimal boil-off and high thermal efficiency.',
        'Compliant with international cryogenic safety standards.',
    ],
    tankTypes: [
    ]
},

]

export const Tank = ({ title, subtitle, description, highlights, changeHighlight, tankTypes, image }) => {

    const [selectedImage, setSelectedImage] = useState(image)

    useEffect(() => {
        setSelectedImage(image);
    }, [image]);

    return (
        <div className="w-full   mb-10 pb-6  ">
            <div className="flex h-full gap-3 flex-col">
                {/* <h1 className='text-xl  lg:text-2xl uppercase text-[#EA1B22]'>{title}</h1> */}
                <p className='text-sm font-semibold opacity-80'>{subtitle}</p>
                <p className=' text-xs xl:text-base font-semibold w-[90%]'>{description}</p>

                <div className="w-full h-fit    flex flex-col md:flex-row ">
                    <div className=" w-full  md:w-[50%] center md:h-[50vh]">
                        <img src={selectedImage} alt="Selected Tank" className="h-full w-[80%] object-contain" />
                    </div>


                    <div className=" w-full md:w-[50%] h-full pr-0 md:pr-10">
                        <div className="w-full flex gap-5 mb-10 flex-wrap">
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
                        <div className="w-full h-[33vh] ">

                            {(selectedImage === '/images/tank/food_grade.webp' ? changeHighlight : highlights).map((item, idx) => (
                                <div key={idx} className=" text-xs xl:text-base py-2 mt-2 border-b-2 border-[#222d37ac]">
                                    <p>{item}</p>
                                </div>
                            ))}
                        </div>




                    </div>
                </div>
            </div>
        </div>
    );
};


const Tanks = () => {

    const [selectedTank, setSelectedTank] = useState(tankData[0]);


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
        <div id='our-fleet' className=" relative w-full  pad  mt-32">
            <div className="w-full ">
                <h1 className='text-xl md:text-2xl lg:text-4xl font-semibold'>Your Requirement, Our Expertise</h1>
                <p className='text-xs  lg:text-base leading-tight'>Built for Efficiency, Safety & Sustainability: Explore Our Specialized Fleet</p>
                <div className="w-full md:flex grid grid-cols-2 gap-5 items-center my-5">
                    {tankData.map((tank, idx) => (
                        <button
                            key={idx}
                            onClick={() => setSelectedTank(tank)}
                            className={`px-2 md:px-4 text-sm font-semibold py-2 rounded-full transition-all duration-200
                                ${selectedTank.title === tank.title
                                    ? 'bg-[#EA1B22] text-white'
                                    : 'border border-gray-700 text-black opacity-50'}`}
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
