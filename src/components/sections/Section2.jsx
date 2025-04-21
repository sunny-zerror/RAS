import React, { useRef, useState } from 'react'
import UnderstandingCard from '../cards/UnderstandingCard'
import { RiArrowLeftLine, RiArrowRightLine } from '@remixicon/react';


const data = [
    {
        id: 1,
        img: "/icons/raw_material.webp",
        hoverimg: "/icons/raw_meterial_hover.webp",
        heading: "Raw Material",
        para: "From chemicals to food-grade goods, we ensure safe, compliant raw material handling for a seamless supply chain."
    },
    {
        id: 2,
        img: "/icons/manufacturer.webp",
        hoverimg: "/icons/manufacturer_hover.webp",
        heading: "Manufacturer",
        para: "We prioritize safety and efficiency, ensuring precise handling of hazardous chemicals, food-grade goods, and high-value cargo."
    },
    {
        id: 3,
        img: "/icons/storage.webp",
        hoverimg: "/icons/storage_hover.webp",
        heading: "Storage",
        para: "We ensure secure, compliant storage, preserving the integrity of chemicals, food-grade goods, and specialized cargo."
    },
    {
        id: 4,
        img: "/icons/distribution.webp",
        hoverimg: "/icons/distribution_hover.webp",
        heading: "Distribution",
        para: "We optimize distribution through our comprehensive agency network and tracking, ensuring end-to-end visibility and zero disruptions. "
    },
    {
        id: 5,
        img: "/icons/customer.webp",
        hoverimg: "/icons//customer_hover.webp",
        heading: "Customer",
        para: "We ensure reliable, resilient supply chains, delivering products to customer on time and in perfect condition."
    },


]

const Section2 = () => {
    const scrollRef = useRef(null);
    const [btn1, setbtn1] = useState(false)
    const [btn2, setbtn2] = useState(true)

    const handleScrollToEnd = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollTo({
                left: scrollRef.current.scrollWidth,
                behavior: 'smooth',
            });
            setbtn1(true)
            setbtn2(false)
        }
    };
    const handleScrollToStart = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollTo({
                left: -scrollRef.current.scrollWidth,
                behavior: 'smooth',
            });
            setbtn2(true)
            setbtn1(false)
        }
    };

    return (
        <div className=' mt-10 lg:mt-32 '>
            <div className="w-full relative   pad ">
                <div className=" w-full  md:w-[50%] flex flex-col justify-center gap-4  ">
                    <h1 className=' text-xl md:text-2xl lg:text-4xl font-bold'>Understanding the Landscape</h1>
                    <p className='  text-sm  lg:text-base  leading-tight '>At RAS, we endeavor to create supply chain as interconnected systems rather than isolated transactions. This approach seeks therefore, to develop unified customer experience, resilience, and expertise across all touchpoints.</p>
                </div>

                <div className="pb-14 ">
                    {/* {
                        btn2 && (
                            <button
                                onClick={handleScrollToEnd}
                                className="absolute  bottom-[15%] md:top-[60%]  right-5 md:right-10  size-6 lg:size-10 center text-[#EA1B22] border-[#EA1B22] rounded-full border z-10"
                            >
                                <RiArrowRightLine size={16} />
                            </button>
                        )
                    }
                    {
                        btn1 && (

                            <button
                                onClick={handleScrollToStart}
                                className="absolute  bottom-[15%] md:top-[60%]  left-5 md:left-10  size-6 lg:size-10 center text-[#EA1B22] border-[#EA1B22] rounded-full border z-10"
                            >
                                <RiArrowLeftLine size={16} />
                            </button>
                        )
                    } */}
                    <div ref={scrollRef} className=" relative w-full pb-6 grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-10  mt-5 md:mt-14 ">
                        {
                            data.map((item, index) => (
                                <UnderstandingCard key={index} data={item} />
                            ))
                        }
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Section2