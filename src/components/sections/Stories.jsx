import React from 'react'

const Stories = () => {
    return (
        <div>
            <div className="w-full   pad flex items-center justify-between">
                <div className="h-full w-[40%] flex flex-col  gap-10 justify-evenly py-10 ">
                    <div className="">
                        <p className='text-3xl font-semibold'>RAS Stories</p>

                    </div>
                    <div className="">
                        <p className='text-[#EA1B22] text-5xl font-light'>Delivering Impact <br /> Where It Matters</p>

                    </div>
                    <div className=" flex flex-col  gap-6 font-medium text-base leading-tight text-[#222D37]">

                        <p>From rapid crisis resolution to sustainable supply chain transformation, RAS consistently delivers where it counts. When a global chemical company faced a tank failure mid-transit, RAS activated its emergency response within hours—rerouting operations and resolving the issue without environmental impact.</p>
                        <p>For an edible oil exporter, RAS implemented a customized Flexi Tank solution that reduced logistics costs by 15% and ensured zero contamination across multiple international shipments. Whether it’s enabling uninterrupted cold chains for pharmaceutical cargo or optimizing storage for chemical plants, our solutions are designed to deliver real-world value, safely and sustainably.</p>
                    </div>
                </div>
                <div className="h-full py-20 w-[50%] center ">
                    <div className="w-full rounded-xl h-[90%]  overflow-hidden">
                        <img className='w-full h-[90%] object-cover rounded-xl' src="/images/RASSCS_stories.webp" alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Stories