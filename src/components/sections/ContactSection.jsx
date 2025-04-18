import React from 'react'
import RedBtn from '../buttons/RedBtn'
import FormBtn from '../buttons/FormBtn'

const ContactSection = () => {
    return (
        <div>
            <div id='contact-form' className="w-full md:h-screen  pad my-24">
                <div className="w-full h-full flex flex-col-reverse md:flex-row  ">
                    <div className=" w-full md:w-1/2 h-full center">
                        <div className="w-full md:w-[90%] h-[90%] rounded-xl overflow-hidden">
                            <div className="w-full mt-10 flex flex-col gap-2 ">
                                <h1 className='text-xl md:text-3xl font-semibold'>Begin Your Risk-Free Partnership</h1>
                                <p className=' text-sm md:text-xl leading-tight'>Experience the RASSCS Solution</p>
                            </div>
                            <div className="w-full md:w-[80%] h-[50vh] flex flex-col gap-8  mt-12">
                                <input type="text" name="" id="" placeholder='Business Name' className='outline-none w-full  text-sm  border-b-2 border-[#00000092] ' />
                                <input type="text" name="" id="" placeholder='Email ID' className='outline-none w-full  text-sm  border-b-2 border-[#00000092] ' />
                                <div className="flex gap-2">
                                    <div className="">
                                        <img src="/icons/flg.png" alt="" />
                                    </div>
                                    <input type="text" name="" id="" placeholder='Phone Number' className='outline-none w-full  text-sm  border-b-2 border-[#00000092] ' />
                                </div>
                                <input type="text" name="" id="" placeholder='Message' className='outline-none w-full  text-sm  border-b-2 border-[#00000092] ' />
                                <div className="mt-6 w-full">
                                    <FormBtn text={"Optimize Your Supply Chain"}  />
                                </div>
                            </div>
                            <div className="w-full">
                                <p className=' text-sm w-full md:text-xl md:w-[60%] '>Where every shipment advances the science of safe, sustainable logistics.</p>
                                <button className=' border-2 border-[#EA1B22] px-2 py-1 rounded-lg mt-3 md:mt-10 text-[#EA1B22]'>Download Our Brochure</button>
                            </div>
                        </div>
                    </div>
                    <div className=" w-full md:w-1/2 mb-5 md:mb-0 h-full overflow-hidden center">
                        <div className=" w-full md:w-[90%] h-[85%] rounded-xl overflow-hidden">
                            <img className='w-full h-full object-cover' src="/images/contact_form.webp" alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ContactSection