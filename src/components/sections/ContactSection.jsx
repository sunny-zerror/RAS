import React from 'react'
import RedBtn from '../buttons/RedBtn'
import FormBtn from '../buttons/FormBtn'
import { RiArrowDownSLine } from '@remixicon/react'
import BorderBtn from '../buttons/BorderBtn'

const ContactSection = () => {
    return (
        <div className='pt-10 lg:py-36 overflow-hidden'>
            <div id='contact-form' className="w-full md:h-screen lg:h-[70vh] 2xl:h-[42vw]   pad ">
                <div className="w-full  h-full flex flex-col-reverse md:flex-row  ">
                    <div className=" w-full md:w-1/2 h-full  center">
                        <div className="w-full h-full flex flex-col justify-between overflow-hidden">
                            <div className=" mb-5 md:mb-0 w-full  flex flex-col gap-2 ">
                                <h1 className='text-xl md:text-2xl lg:text-4xl font-semibold'>Begin Your Risk-Free Partnership</h1>
                                <p className=' text-sm md:text-2xl leading-tight'>Experience the RAS Solution</p>
                            </div>
                            <div className="w-full  md:w-[70%]  flex flex-col gap-6 md:gap-8  ">
                                <input type="text" name="" id="" placeholder='Business Name' className='outline-none pb-1 w-full  text-sm  border-b border-[#00000092] ' />
                                <input type="text" name="" id="" placeholder='Email ID' className='outline-none pb-1 w-full  text-sm  border-b border-[#00000092] ' />
                                <div className="flex gap-2">
                                    <div className="flex items-center gap-2">
                                        <img src="/icons/flg.png" alt="" />
                                        <RiArrowDownSLine />
                                    </div>
                                    <input type="text" name="" id="" placeholder='Phone Number' className='outline-none pb-1 w-full  text-sm  border-b border-[#00000092] ' />
                                </div>
                                <input type="text" name="" id="" placeholder='Message' className='outline-none pb-1 w-full  text-sm  border-b border-[#00000092] ' />
                                <div className="mt-6 w-full">
                                    <FormBtn text={"Optimize Your Supply Chain"} />
                                </div>
                            </div>
                            <div className="w-full md:w-[70%] bg-gray-100 rounded-xl py-8 p-5   ">
                                <p className=' leading-tight text-sm xl:text-xl w-full   '>Where every shipment advances the science of safe, sustainable logistics.</p>
                                <div className="mt-3 xl:mt-10">

                                <BorderBtn  text={"Download Our Brochure"} link={"/pdf/RAS_Goodrich_Brochure.pdf"} width="100%" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" w-full md:w-1/2 mb-5  md:mb-0 h-full overflow-hidden center">
                        <div className=" w-full h-full rounded-xl overflow-hidden">
                            <img className='w-full h-full object-cover' src="/images/contact_form.webp" alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ContactSection