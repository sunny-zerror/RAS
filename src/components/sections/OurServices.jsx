import React from 'react'
import ServicesCard from '../cards/ServicesCard'

const OurServices = () => {

    const services = [
        {
            title: 'Tank Services',
            description: 'Comprehensive support for ISO, food-grade, special, gas, flexi, and baffle tanks—including cleaning, maintenance, and repair—to ensure operational readiness and compliance for ISO tanks.',
            buttons: ['Chemical Grade', 'Food Grade', 'Liquified Gas', 'Baffle', 'Swap', 'Coated'],

        },
        {
            title: 'Agency Service',
            description: 'Dedicated representation and operational support for international ISO tank operators, facilitating smooth logistics operations, documentation, and compliance management.',
            buttons: [],
        },
        {
            title: 'Tank Leasing',
            description: 'Flexible leasing options catering to diverse cargo reqs. across chemical and foodgrade while ensuring cost effective and secure transport.',
            buttons: ['Chemical', 'Food Grade', 'Liquified Gas', 'T11', 'T14', 'T20 & T22', 'T50', 'T75'],
        },
        {
            title: 'Tank Management',
            description: 'End-to-end management of tank operations, ensuring efficiency in fleet utilization, regulatory compliance, and seamless coordination across supply chains.',
            buttons: ['SOC'],
        },
        {
            title: 'Storage',
            description: 'Secure storage solutions designed to accommodate a variety of liquid and chemical cargoes, maintaining optimal conditions for safety and preservation.',
            buttons: ['Class 3', 'Class 6', 'Class 8', 'Class 9'],
        },
        {
            title: 'Transportation',
            description: 'Reliable domestic transportation services designed for seamless movement of goods within national networks, ensuring timely and secure deliveries.',
            buttons: ['Domestic', 'SOC'],
        },
        {
            title: 'Awareness',
            description: 'Expert guidance and specialized training programs to optimize supply chain operations, regulatory compliance, and best practices for safe and efficient logistics management.',
            buttons: [],
        },
        {
            title: 'Flexi',
            description: 'Reliable logistics for non-hazardous liquid cargo, supported by operational control and a global network.',
            buttons: [],
            category: [
                {
                    title: "Our Services Include",
                    btn: [
                        'End-to-End Logistics',
                        'Global Reach',
                        'Emergency Response'
                    ]
                },
                {
                    title: "We Transport:",
                    btn: [
                        'Food & Beverages',
                        'Industrial Chemicals',
                        'Agricultural Products'
                    ]
                },

            ]
        },
        {
            title: 'Other Services',
            description: 'As part of our supply chain solutions we create integrated solutions across Dry, Oversized cargo, Freight Forwarding, CIS, Reefer, customs clearance and tank cleaning services.',
            buttons: ['NVOCC', 'Projects/CIS', 'OOG/ODC', 'Reefer Container Services', 'Global Freight Forwarding ', 'Integrated Chemical Service'],
        },
    ]

    return (
        <div className='mt-10 lg:mt-32'>
            <div id='our-services' className="w-full   pad">
                <div className="w-full ">
                    <h1 className='text-xl md:text-2xl lg:text-4xl font-semibold'>Our Services</h1>
                </div>
                <div className="w-full mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        services.map((item, index) => (
                            <div key={index} className="h-full flex  justify-center">
                                <ServicesCard title={item.title} description={item.description} buttons={item.buttons} category={item.category} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default OurServices