import React from 'react'
import RedBtn from '../buttons/RedBtn'

const OurStrength = () => {
    return (
        <div>
            <div class="pad h-[40vh]  flex items-center justify-between  ">
                <div class="w-[45%] h-full flex flex-col justify-evenly ">
                    <p class="text-3xl font-semibold">
                        Our Core Strengths
                    </p>
                    <div className="">

                        <p class="font-medium text-lg ">
                            Built on Precision. Driven by Compliance. Powered by Expertise.
                        </p>
                        <p class="mt-2">
                            RASSCS delivers specialized logistics solutions with a sharp focus on safety, sustainability, and performance. Our deep technical know-how, disciplined execution, and tailored approach enable seamless global movement of sensitive and regulated cargo.
                        </p>
                    </div>
                    <RedBtn text={"Get a Risk Free Audit Today"} />

                </div>
                <div class="flex items-center justify-evenly w-[50%] h-full ">
                    <div class=" h-full  w-[16%] gap-2 text-center center flex-col">
                        <img className='w-[50%]' src="/icons/manufacturer 1.png" alt="" />                        
                            <p className='text-sm'>
                                Chemical Precision
                            </p>
                    </div>
                    <div class=" h-full  w-[16%] gap-2 text-center center flex-col">
                        <img className='w-[50%]' src="/icons/manufacturer 1.png" alt="" />                       
                            <p className='text-sm w-[70%] '>
                                Grade-A  Care
                            </p>
                    </div>
                    <div class=" h-full  w-[16%] gap-2 text-center center flex-col">
                        <img className='w-[50%]' src="/icons/manufacturer 1.png" alt="" />                        
                            <p className='text-sm'>
                                Cryochemical Mastery
                            </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurStrength