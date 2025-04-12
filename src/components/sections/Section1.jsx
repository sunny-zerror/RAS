import React from 'react'
import RedBtn from '../buttons/RedBtn'

const Section1 = () => {
  return (
    <div>
        <div className="w-full relative h-screen pt-[12vh]  bg-[url('https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?cs=srgb&dl=pexels-chanaka-318741-906494.jpg&fm=jpg')] bg-cover bg-center">
            <div className="w-fit  mt-10 z-[99]  h-[40vh] flex flex-col gap-5 justify-center">
                <p className='text-5xl font-bold pad text-black'>Global Supply Chain Mastery</p>
                <div className="flex pad gap-5 ">
                    <RedBtn text={"Explore Services"}/>
                    <button className='border-2 border-black text-sm center font-medium px-6 py-2 rounded-lg'>
                        <p className='font-bold '>Contact US</p>
                    </button>
                </div>
            </div>
            <div className="w-full h-[40vh]  flex items-center justify-end pr-20">
                <div className="w-[38%] bg-black h-full pad flex flex-col gap-5 justify-center">
                    <p className='text-4xl font-semibold text-white'> What is RASSCS?</p>
                    <p className='text-base leading-tight text-white'>RASSCS, a Goodrich company, ensures uninterrupted supply chain continuity through a well connected agency network focused on conscious risk mitigation, global asset availability, and environmentally sustainable solutions.</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Section1