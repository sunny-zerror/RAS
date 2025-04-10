import React from 'react'
import RedBtn from '../buttons/RedBtn'

const HowRas = () => {
  return (
    <div>
        <div className="w-full h-screen  flex flex-col items-start justify-evenly pad">
            <p className='text-3xl font-semibold'>How RAS Makes It Happen</p>
            <div className="w-full h-[80%] flex items-center justify-between">
                <div className="w-[40%]  overflow-hidden rounded-2xl h-full">
                    <img className=' w-full h-full object-cover' src="/images/img1.png" alt="" />
                </div>
                <div className="w-[50%] h-full center">
                    <div className="flex flex-col h-[50%] items-start justify-evenly  w-full ">
                        <div className="flex w-full  items-center  gap-3 ">
                            <div className="size-5 center">
                            <img className='' src="/icons/Ellipse 30.png" alt="" />
                            </div>
                            <p className='text-5xl'>Precision Logistics</p>
                        </div>
                        <div className="pl-9">
                        <p className=' text-base w-[80%]'>With deep expertise in chemical, food-grade, cryogenic, and specialty logistics, we tailor solutions that comply with the highest industry standards—ensuring safety, traceability, and uninterrupted flow.</p>

                        </div>
                        <div className="pl-9">

                        <RedBtn text={"Customize Your Logistics Plan"}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HowRas