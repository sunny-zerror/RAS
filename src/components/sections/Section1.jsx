import React from 'react'
import RedBtn from '../buttons/RedBtn'

const Section1 = () => {
  return (
    <div>
        <div className="w-full relative h-screen lg:h-[180vh] pt-[12vh]  bg-[url('/images/hero_section.webp')] bg-cover bg-center">
            <div className="w-fit  mt-[10vh] md:mt-[20vh] z-[99]  h-[40vh] flex flex-col gap-5 justify-center">
                <p className='  text-2xl md:text-5xl font-bold pad text-black'>Global Supply Chain </p>
                <div className="flex pad gap-5 ">
                    <RedBtn text={"Explore Services"}  />
                    <a href="#contactSection">
                    <button className='border-2 cursor-pointer border-black text-xs md:text-sm center font-medium   px-6 py-2 rounded-lg'>
                        <p className='font-bold cursor-pointer '>Contact US</p>
                    </button>
                    </a>
                </div>
            </div>
            <div className="w-full h-[30vh] md:h-[20vh] lg:h-[90vh]  flex items-center justify-end pr-0 md:pr-10 xl:pr-20">
                <div className=" w-full md:w-[38%]      h-full pad flex flex-col gap-5 justify-end">
                    <p className=' text-2xl lg:text-4xl font-semibold text-white'> What is RAS</p>
                    <p className=' text-xs lg:text-base leading-tight text-white'>RASSCS, a Goodrich company, focuses on supply chain continuity through a well connected agency network, building on delivering  solutions that are responsible, safe, and sustainable.</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Section1