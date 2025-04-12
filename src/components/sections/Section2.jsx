import React from 'react'
import UnderstandingCard from '../cards/UnderstandingCard'

const Section2 = () => {
    return (
        <div>
            <div className="w-full   pad ">
                <div className="w-[50%] flex flex-col justify-center gap-4 pt-14 ">
                    <p className='text-3xl font-semibold'>Understanding the Landscape</p>
                    <p className='text-base  leading-tight '>At RASSCS, we engineer supply chains as interconnected systems rather than isolated transactions.
                        Our four-pillar framework ensures compliance and operational resilience across all touchpoints</p>
                </div>
                <div className="pb-14">

                <div className="w-full pb-6 flex gap-14 mt-14 overflow-x-scroll scroller">
                    {
                        [
                            1, 2, 3, 4, 5, 6].map((item) => (
                                
                                <UnderstandingCard />
                                
                            ))
                        }
                        </div>
                </div>


            </div>
        </div>
    )
}

export default Section2