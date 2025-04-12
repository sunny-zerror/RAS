import React from 'react'
import ServicesCard from '../cards/ServicesCard'

const OurServices = () => {

    const services = [
    {
        title: 'Tank Services',
        description: 'Comprehensive support for ISO, food-grade, special, gas, flexi, and baffle tanks; including cleaning, maintenance, and repair, to ensure operational readiness and compliance for ISO tanks.',
        buttons: ['Learn More', 'Get Quote'],

    },
    {
        title: 'Agency Service',
        description: 'Dedicated representation and operational support for international ISO tank operators, facilitating smooth logistics operations, documentation, and compliance management.',
        buttons: ['Learn More', 'Get Quote'],
    },
    {
        title: 'Tank Leasing',
        description: 'End-to-end management of tank operations, ensuring efficiency in fleet utilization, regulatory compliance, and seamless coordination across supply chains.',
        buttons: ['Learn More', 'Get Quote'],
    },
    {
        title: 'Tank Management',
        description: 'Dedicated representation and operational support for international ISO tank operators, facilitating smooth logistics operations, documentation, and compliance management.',
        buttons: ['Learn More', 'Get Quote'],
    },
    {
        title: 'Storage',
        description: 'Secure storage solutions designed to accommodate a variety of liquid and chemical cargoes, maintaining optimal conditions for safety and preservation.',
        buttons: ['Learn More', 'Get Quote'],
    },
    {
        title: 'Transportation',
        description: 'Reliable domestic transportation services designed for seamless movement of goods within national networks, ensuring timely and secure deliveries.',
        buttons: ['Learn More', 'Get Quote', 'Get Quote', 'Get Quote', 'Get Quote', 'Get Quote', 'Get Quote'],
    },
    {
        title: 'Awareness',
        description: 'Expert guidance and specialized training programs to optimize supply chain operations, regulatory compliance, and best practices for safe and efficient logistics management.',
        buttons: ['Learn More', 'Get Quote'],
    },
    {
        title: 'Flexi',
        description: 'Reliable logistics for non-hazardous liquid cargo, supported by operational control and a global network.',
        buttons: ['Learn More', 'Get Quote'],
    },
    {
        title: 'Other Services',
        description: 'As part of our supply chain solutions we create integrated solutions across Dry, Oversized cargo, Freight Forwarding, CIS, Reefer, customs clearance and tank cleaning services.',
        buttons: ['Learn More', 'Get Quote'],
    },
]

  return (
    <div>
        <div className="w-full  mb-10 mt-20 pad">
        <div className="w-full ">
                <p className='text-3xl font-semibold'>Our Services</p>
            </div>
            <div className="w-full mt-5 grid grid-cols-3 gap-5">
                {
                    services.map((item, index) => (
                        <div key={index} className="h-full flex items-center justify-center">
                            <ServicesCard title={item.title} description={item.description} buttons={item.buttons}/>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default OurServices