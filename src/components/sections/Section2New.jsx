import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";

const Section2New = () => {

    const [selectedImage, setselectedImage] = useState("/globe/default.webp")
    const [selectedInfo, setSelectedInfo] = useState({
        title: "",
        desc: ""
    });
    const titles = [
        "Raw Material",
        "Manufacturer",
        "Storage",
        "Distribution",
        "Retailer",
        "Customer",
    ]

    const markers = [
        {
            top: '12%',
            title: "Storage",
            left: '51%',
            // bg: '#00000068'
        },
        {
            top: '14%',
            title: "Manufacturer",
            left: '25%',
            // bg: '#00000068'
        },
        {
            top: '38%',
            title: "Raw Material",
            left: '12%',
            // bg: '#00000068'
        },
        {
            bottom: '20%',
            title: "Customer",
            left: '20%',
            // bg: '#00000068'
        },
        {
            bottom: '12%',
            title: "Retailer",
            left: '47.5%',
            // bg: '#00000068'
        },
        {
            top: '33%',
            title: "Distribution",
            right: '21%',
            // bg: '#00000068'
        },
    ];

    const data = [
        {
            title: "Raw Material",
            img: "/globe/globe1.webp",
            desc: "From chemicals to food-grade goods, we ensure safe, compliant raw material handling for a seamless supply chain.",
        },
        {
            title: "Manufacturer",
            img: "/globe/globe2.webp",
            desc: "We prioritize safety and efficiency, ensuring efficient handling of hazardous chemicals, food-grade goods, and high-value cargo.",
        },
        {
            title: "Storage",
            img: "/globe/globe3.webp",
            desc: "We ensure secure, compliant storage, preserving the integrity of chemicals, food-grade goods, and specialized cargo.",
        },
        {
            title: "Distribution",
            img: "/globe/globe4.webp",
            desc: "We optimize distribution through our comprehensive agency network and tracking, ensuring end-to-end visibility and zero disruptions. ",
        },
        {
            title: "Retailer",
            img: "/globe/globe5.webp",
            desc: "RAS ensures reliable, resilient supply chains, delivering products to retailers on time and in perfect condition.",
        },
        {
            title: "Customer",
            img: "/globe/globe6.webp",
            desc: "We ensure reliable, resilient supply chains, delivering products to customer on time and inperfect condition.",
        },

    ]

    const handleMarkerHover = (title) => {
        const item = data.find(d => d.title === title);
        if (item) {
            setselectedImage(item.img);
            setSelectedInfo({ title: item.title, desc: item.desc });
        }
    };

    return (
        <div className='mt-10 mb-20 lg:mb-0 lg:mt-32 overflow-hidden'>
            <div className=" pad relative   w-full  ">
                <div className=" w-full  flex flex-col justify-center gap-4  ">
                    <h1 className=' text-xl md:text-2xl lg:text-4xl font-bold'>Understanding the Landscape</h1>
                    <p className='  text-xs  w-full md:w-[75%] lg:text-lg  leading-tight '>At RAS, we endeavor to create supply chain as interconnected systems rather than isolated transactions. This approach seeks therefore, to develop unified customer experience, resilience, and expertise across all touchpoints.</p>
                </div>
                <div className="w-full h-fit md:h-[60vh]   mt-6 flex flex-col-reverse md:flex-row items-center">
                    <div className=" w-full md:w-1/2 h-full center md:pt-10 md:pr-24">
                        {
                            selectedInfo.title === "" ? (
                                <div className="w-full grid grid-cols-2">
                                    {
                                        titles.map((title, index) => (
                                            <h2 key={index}
                                                onClick={() => handleMarkerHover(title)}
                                                className=" text-lg cursor-pointer lg:text-2xl font-medium  mb-6">{title}</h2>
                                        ))
                                    }
                                </div>
                            ) : ("")
                        }

                        <AnimatePresence mode="wait">
                            {selectedInfo.title && (
                                <motion.div
                                    key={selectedInfo.title}
                                    initial={{ y: "1vh", opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: "-1vh", opacity: 0 }}
                                    className='w-full mt-5 md:mt-0 '
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                >
                                    <h2 className="text-lg lg:text-3xl font-medium cursor-default mb-2">
                                        {selectedInfo.title}
                                    </h2>
                                    <p className="text-xs lg:text-xl leading-tight">
                                        {selectedInfo.desc}
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>


                    </div>
                    <div className=" w-full md:w-1/2 h-full relative   center ">
                        <div className=" scale-125 md:scale-100  relative w-full h-auto">
                            <img className="w-full scale-75 h-auto block" src={selectedImage} alt="" />
                            {
                                markers.map((marker, index) => (
                                    <div
                                        key={index}
                                        className="absolute cursor-pointer z-[9] flex flex-col items-center justify-center size-10 scale-125 md:scale-110  lg:size-12 xl:size-20 rounded-full"
                                        style={{
                                            top: marker.top,
                                            bottom: marker.bottom,
                                            left: marker.left,
                                            right: marker.right,
                                            backgroundColor: marker.bg,
                                        }}
                                        onMouseEnter={() => handleMarkerHover(marker.title)}
                                    />
                                ))
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section2New