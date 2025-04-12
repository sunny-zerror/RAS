
import React, { useState } from 'react'



const tankData = [{
    title: 'ISO Tanks',
    subtitle: 'Efficient and Secure Transport for Liquids and Chemicals',
    description: 'RASSCS maintains a robust fleet of ISO tanks—T11, T14, T20, and T22—engineered for the global movement of bulk liquids. These tanks serve both chemical and food-grade industries, offering flexibility, safety, and regulatory compliance.',
    image: '/images/tans.png',
    highlights: [
        'Versatile applications for hazardous and non-hazardous cargo',
        'Designed for food-grade and chemical-grade products',
        'Compliance with international transport standards',
    ],
    tankTypes: [
        {
            label: 'Chemical',
            image: '/images/tans.png',
        },
        {
            label: 'Food Grade',
            image: '/images/img1.png'
        },

    ]
},
{
    title: 'Baffle Tanks',
    subtitle: 'Stabilized Transport for Bulk Liquids with Reduced Surge Impact',
    description: 'Baffle Tanks come with internal partitions to minimize liquid movement during transit, ensuring added safety for sensitive or partially filled loads.',
    image: '/images/tans.png',
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
    image: '/images/tans.png',
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
    image: '/images/tans.png',
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
    image: '/images/tans.png',
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
    image: '/images/tans.png',
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
        <div className="w-full mb-10 py-12 border-b-2">
            <div className="flex h-full gap-3 flex-col">
                <h1 className='text-2xl uppercase text-[#EA1B22]'>{title}</h1>
                <p className='text-sm'>{subtitle}</p>
                <p className='font-semibold w-[90%]'>{description}</p>

                <div className="w-full mt-10 h-[60vh] flex">
                    <div className="w-[50%] center h-full">
                        <img src={selectedImage} alt="Selected Tank" className="max-h-full object-contain" />
                    </div>


                    <div className="w-[50%] pt-10 h-full pr-10">
                        <p className='font-semibold text-sm mb-2'>Highlights:</p>
                        {highlights.map((item, idx) => (
                            <div key={idx} className="py-2 mt-2 border-b-2  border-[#222d37ac]">
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
                                        className={`w-[20%] rounded-xl cursor-pointer transition-all duration-300 px-3 py-2 flex flex-col gap-2
                                        ${isSelected ? 'border shadow-lg border-[#959595]' : ''}`}
                                    >
                                        <p className='text-sm font-semibold text-center'>{tank.label}</p>
                                        <div className="w-full center">
                                            <img className='w-[70%]' src={tank.image} alt={tank.label} />
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
    return (
        <div className="w-full  pad my-10">
            <div className="w-full ">
                <p className='text-3xl font-semibold'>Fleet</p>
                <p className='text-base leading-tight'>Built for Precision, Safety & Sustainability: Explore Our Specialized Fleet</p>
            </div>
            {
                tankData.map((tank, idx) => (
                    <Tank key={idx} {...tank} />
                ))
            }
        </div>
    );
};

export default Tanks;
