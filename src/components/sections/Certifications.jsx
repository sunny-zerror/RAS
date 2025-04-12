import React from 'react'

const Certifications = () => {
    const logos=[
        "/logos/GoodRich-Client-Logo-7.png",
        "/logos/GoodRich-Client-Logo-7.png",
        "/logos/GoodRich-Client-Logo-7.png",
        "/logos/GoodRich-Client-Logo-7.png",
        "/logos/GoodRich-Client-Logo-7.png",
        "/logos/GoodRich-Client-Logo-7.png",
        "/logos/GoodRich-Client-Logo-7.png",
        "/logos/GoodRich-Client-Logo-7.png",
        "/logos/GoodRich-Client-Logo-7.png",
        "/logos/GoodRich-Client-Logo-7.png",
    ]
  return (
    <div>
        <div className="w-full my-10  flex flex-col gap-16 pad">
            <p className='text-3xl font-semibold'>Certification and Affiliations</p>
            <div className="w-full  gap-10  grid grid-cols-5 ">
                {
                    logos.map((logo,index)=>(
                        <div key={index} className="w-full h-full flex items-center justify-center">
                            <img className='w-[70%] object-contain' src={logo} alt="" />
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Certifications